const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}});
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let category=new URLSearchParams(location.search).get('categoria')||'Todos';
const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.product-card')],search=document.querySelector('#search');
if(filters.length&&!filters.some(b=>b.dataset.filter===category))category='Todos';
function filter(){if(!filters.length)return;const term=normalize(search.value.trim());let count=0;cards.forEach(c=>{c.hidden=!(category==='Todos'||c.dataset.category===category||(category==='Grease Out'&&c.dataset.search.startsWith('GREASE OUT')))||!normalize(c.dataset.search).includes(term);if(!c.hidden)count++;});document.querySelectorAll('.catalog-group').forEach(g=>g.hidden=![...g.querySelectorAll('.product-card')].some(c=>!c.hidden));filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));document.querySelector('#empty').hidden=count>0;document.querySelector('#count').textContent=count+' producto'+(count===1?'':'s');}
filters.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;filter();}));search?.addEventListener('input',filter);filter();
document.querySelectorAll('[data-doc-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-doc-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('[data-doc-category]').forEach(x=>x.hidden=b.dataset.docFilter!=='Todos'&&x.dataset.docCategory!==b.dataset.docFilter);}));
const form=document.querySelector('#contact-form'),ready=document.querySelector('#request-ready');
const whatsappLink=document.querySelector('#send-whatsapp');
const whatsappBase=whatsappLink?.href;
if(form){const params=new URLSearchParams(location.search);for(const field of ['tipo','producto','necesidad']){const value=params.get(field);if(value){const input=document.getElementById(field);if(input.tagName!=='SELECT'||[...input.options].some(o=>o.value===value))input.value=value;}}
form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const product=document.querySelector('#producto').selectedOptions[0].textContent;const text=`Solicitud de ${data.get('tipo')} — Restore GH\n\nNombre: ${data.get('nombre')}\nEmpresa: ${data.get('empresa')||'No indicada'}\nCorreo: ${data.get('correo')}\nTeléfono: ${data.get('telefono')||'No indicado'}\nCiudad: ${data.get('ciudad')||'No indicada'}\nProducto: ${product}\nNecesidad: ${data.get('necesidad')||'No indicada'}\n\n${data.get('mensaje')}`;document.querySelector('#request-text').value=text;document.querySelector('#send-email').href='mailto:contacto@restoregh.com?subject='+encodeURIComponent('Solicitud de '+data.get('tipo')+' — Restore GH')+'&body='+encodeURIComponent(text);const whatsappMessage=new URL(whatsappBase);whatsappMessage.searchParams.set('text',text);whatsappLink.href=whatsappMessage.href;form.hidden=true;ready.hidden=false;ready.focus();});
document.querySelector('#edit-request').addEventListener('click',()=>{ready.hidden=true;form.hidden=false;form.querySelector('select').focus();});
}

document.querySelectorAll('[data-comparison]').forEach(comparison => {
  const frame = comparison.querySelector('[data-comparison-frame]');
  const range = comparison.querySelector('[data-comparison-range]');
  function updateComparison(value) {
    const position = Math.max(0, Math.min(100, Math.round(value)));
    range.value = position;
    range.setAttribute('aria-valuetext', position + ' % antes y ' + (100 - position) + ' % después');
    comparison.style.setProperty('--before', position + '%');
    comparison.querySelector('[data-before-label]').hidden = position === 0;
    comparison.querySelector('[data-after-label]').hidden = position === 100;
  }
  function updateFromPointer(event) {
    const bounds = frame.getBoundingClientRect();
    updateComparison((event.clientX - bounds.left) / bounds.width * 100);
  }
  range.addEventListener('input', () => updateComparison(range.value));
  frame.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    frame.setPointerCapture(event.pointerId);
    updateFromPointer(event);
  });
  frame.addEventListener('pointermove', event => {
    if (frame.hasPointerCapture(event.pointerId)) updateFromPointer(event);
  });
  frame.addEventListener('pointerup', event => {
    if (frame.hasPointerCapture(event.pointerId)) frame.releasePointerCapture(event.pointerId);
  });
  comparison.querySelectorAll('[data-comparison-value]').forEach(button => {
    button.addEventListener('click', () => updateComparison(button.dataset.comparisonValue));
  });
});
