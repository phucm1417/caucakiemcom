import json,re
from pathlib import Path
s=Path('src/expansion/packed-art.js').read_text();p=json.loads(s[len('const PACK='):-2]);original=json.loads(Path('src/art-export/danh-muc.json').read_text());assert set(p)=={r['id'] for r in original};assert len(p)==867
for key,a in p.items():assert a['s'].startswith('data:image/webp;base64,') and a['w']>0 and a['h']>0
print({'embedded_images':len(p),'coverage':'all available exported images','largest_side':max(max(a['w'],a['h']) for a in p.values())})
