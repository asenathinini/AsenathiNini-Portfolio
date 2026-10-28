const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}

(function(){
var wil=document.getElementById('uniworks');
function openWil(go){if(!wil)return;wil.hidden=false;if(go)wil.scrollIntoView({behavior:'smooth'});}
document.querySelectorAll('[data-open-wil]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();openWil(true);});});
if(location.hash==='#uniworks'||location.hash==='#wil')openWil(location.hash==='#uniworks');
document.querySelectorAll('[data-panel]').forEach(function(b){b.addEventListener('click',function(){
var id='panel-'+b.getAttribute('data-panel');
document.querySelectorAll('.agile-panel').forEach(function(p){p.hidden=p.id!==id;});
document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'});});});
document.querySelectorAll('.tabs').forEach(function(bar){var tabs=bar.querySelectorAll('[role=tab]');tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(o){var on=o===t;o.setAttribute('aria-selected',on);document.getElementById(o.getAttribute('data-tab')).hidden=!on;});});});});
})();
