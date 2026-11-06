from pathlib import Path
from PIL import Image
import zipfile,json,io,base64
out={};total=0
with zipfile.ZipFile('src/bo-hinh-tach-nen.zip') as z:
 for r in json.loads(z.read('danh-muc.json')):
  im=Image.open(io.BytesIO(z.read(r['file']))).convert('RGBA');box=im.getbbox()
  if box:im=im.crop(box)
  size=192 if r['group'] in ['character','boat','boss','aquarium','map'] and r['variant'] not in ['icon','portrait','ultimate_icon'] else 96
  im.thumbnail((size,size),Image.Resampling.LANCZOS);buf=io.BytesIO();im.save(buf,format='WEBP',quality=60,method=6);b=buf.getvalue();total+=len(b)
  out[r['id']]={'n':r['name'],'g':r['group'],'v':r['variant'],'w':im.width,'h':im.height,'s':'data:image/webp;base64,'+base64.b64encode(b).decode()}
# Approved original replacements retain catalog IDs, but have new names/designs.
replacements=json.loads(Path('src/original-art/danh-muc.json').read_text())
for r in replacements:
 im=Image.open(Path('src/original-art')/r['file']).convert('RGBA')
 alpha=im.getchannel('A');box=alpha.point(lambda v:255 if v>16 else 0).getbbox()
 assert box,r['id']
 im=im.crop(box);tip=None
 if r['group']=='character' and r['variant'] in ['anchor','body_layer']:
  a=im.getchannel('A');best=(-1,0)
  for y in range(im.height//2):
   for x in range(im.width-1,best[0],-1):
    if a.getpixel((x,y))>=128:best=(x,y);break
  tip=[round((best[0]+.5)/im.width,6),round((best[1]+.5)/im.height,6)]
 size=256 if r['group']=='character' and r['variant'] in ['anchor','body_layer'] else 128 if r['variant'] in ['asset','portrait'] else 96
 im.thumbnail((size,size),Image.Resampling.LANCZOS);buf=io.BytesIO();im.save(buf,format='WEBP',quality=85,method=6);b=buf.getvalue();total+=len(b)
 item={'n':r['name'],'g':r['group'],'v':r['variant'],'w':im.width,'h':im.height,'s':'data:image/webp;base64,'+base64.b64encode(b).decode(),'original':True}
 if tip:item['tip']=tip
 out[r['id']]=item
assert len(out)==901
Path('src/expansion/packed-art.js').write_text('const PACK='+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';\n')
missing=json.loads(Path('src/art-export/chua-hoan-thanh.json').read_text())
Path('src/expansion/missing-art.json').write_text(json.dumps([r for r in missing if r['id'] not in out],ensure_ascii=False,indent=2))
print({'images':len(out),'bytes':total})
