// UI symbols are vector artwork so devices do not need an emoji font.
const HUB_SYMBOLS={
 chat:'<path d="M5 6h22v16H15l-7 5v-5H5z" fill="#72c3ad"/><path d="M10 12h12M10 17h8"/>',
 people:'<circle cx="12" cy="10" r="5" fill="#efb867"/><circle cx="24" cy="12" r="4" fill="#8cc9bc"/><path d="M3 27c0-11 18-11 18 0z" fill="#72c3ad"/><path d="M22 20c5 0 8 3 8 7h-6"/>',
 crown:'<path d="M4 9l7 7 5-11 5 11 7-7-4 17H8z" fill="#edc358"/><path d="M9 22h14"/>',
 hat:'<path d="M9 7h14l2 17H7z" fill="#5b7799"/><path d="M4 25h24M8 19h16"/>',
 flower:'<path d="M16 8C6-2 2 14 10 16c-10 6 3 16 6 7 7 10 16-4 7-7 10-7-3-17-7-8" fill="#e99fb2"/><circle cx="16" cy="16" r="4" fill="#ffd780"/>',
 scarf:'<path d="M6 8h20v8H16v13H8V16H6z" fill="#e88c88"/><path d="M11 10v5M11 22v5"/>',
 heart:'<path d="M16 27L5 16C-3 5 13 0 16 10 19 0 35 5 27 16z" fill="#ef7e97"/>',
 smile:'<circle cx="16" cy="16" r="13" fill="#f9d26f"/><path d="M9 19q7 10 14 0M10 11v2M22 11v2"/>',
 flame:'<path d="M16 2c4 8-3 9 6 14 2-3 3-5 2-7 15 20-9 29-16 15C2 16 11 11 16 2z" fill="#f59b50"/><path d="M16 17c-9 12 9 13 0 0" fill="#ffe28d"/>',
 cry:'<circle cx="16" cy="16" r="13" fill="#f9d26f"/><path d="M10 12v2M22 12v2M10 24q6-7 12 0"/><path d="M23 15c-7 11 7 11 0 0" fill="#73cde7"/>',
 wave:'<path d="M10 17V8q0-4 3-1v8-10q2-4 4 0v9-10q3-3 3 1v10-7q3-4 3 1v10l3-4q4-1 2 4l-5 10H13L5 19q-2-5 2-4z" fill="#f6cb80"/>',
 paw:'<ellipse cx="16" cy="23" rx="9" ry="7" fill="#78b7a3"/><ellipse cx="6" cy="13" rx="4" ry="5" fill="#edc87d"/><ellipse cx="15" cy="8" rx="4" ry="5" fill="#edc87d"/><ellipse cx="25" cy="13" rx="4" ry="5" fill="#edc87d"/>'
};
function hubSvg(key){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#24564c" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+HUB_SYMBOLS[key]+'</svg>';}
function rasterHubIcon(key){const canvas=document.createElement('canvas');canvas.width=canvas.height=96;const ctx=canvas.getContext('2d');ctx.scale(3,3);ctx.lineWidth=1.7;ctx.lineCap=ctx.lineJoin='round';ctx.strokeStyle='#24564c';const xml=new DOMParser().parseFromString(hubSvg(key),'image/svg+xml');for(const el of xml.documentElement.children){const path=new Path2D(),n=k=>Number(el.getAttribute(k)||0);if(el.tagName==='path')path.addPath(new Path2D(el.getAttribute('d')));else if(el.tagName==='circle')path.arc(n('cx'),n('cy'),n('r'),0,Math.PI*2);else if(el.tagName==='ellipse')path.ellipse(n('cx'),n('cy'),n('rx'),n('ry'),0,0,Math.PI*2);const fill=el.getAttribute('fill');if(fill&&fill!=='none'){ctx.fillStyle=fill;ctx.fill(path);}ctx.stroke(path);}return canvas;}
const hubSymbolImages={};for(const key in HUB_SYMBOLS){const im=new Image();im.src=rasterHubIcon(key).toDataURL('image/png');hubSymbolImages[key]=im;}
