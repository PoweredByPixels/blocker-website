import {readLeaderboard,formatTime} from './leaderboard.js';
const dialogs = [...document.querySelectorAll('dialog')];
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});

const floating=document.getElementById('floating-menu');
new IntersectionObserver(([entry]) => {
  floating.hidden=entry.boundingClientRect.bottom>=0;
}, {threshold:0}).observe(document.querySelector('.hero-menu'));

const scoreSection=document.getElementById('highscores');
const refresh=document.getElementById('refresh-scores');
const status=document.getElementById('score-status');
const table=document.getElementById('score-rows');
let boardConfig,working=false,hasLoaded=false,nextRefresh=0,rowsShown=false;
const heightFormat=new Intl.NumberFormat('en',{minimumFractionDigits:2,maximumFractionDigits:2});
async function loadScores() {
  if(working || Date.now()<nextRefresh) return;
  working=true;refresh.disabled=true;scoreSection.setAttribute('aria-busy','true');
  status.textContent=rowsShown?'Refreshing the shared leaderboard…':'Loading the shared leaderboard…';
  try {
    if(!boardConfig){
      const response=await fetch('/leaderboard-config.json',{credentials:'omit',signal:AbortSignal.timeout(12000)});
      if(!response.ok)throw new Error('Public configuration unavailable');
      boardConfig=await response.json();
    }
    const rows=await readLeaderboard(boardConfig,AbortSignal.timeout(12000));
    const fragment=document.createDocumentFragment();
    for(const row of rows){
      const tr=document.createElement('tr');
      const values=[String(row.rank).padStart(2,'0'),row.nickname,heightFormat.format(row.height)+' m',row.blocks??'—',formatTime(row.seconds)];
      values.forEach((value,index)=>{
        const cell=document.createElement(index===1?'th':'td');
        if(index===1)cell.scope='row';
        if(index===3)cell.className='blocks-column';
        cell.textContent=String(value);tr.append(cell);
      });
      fragment.append(tr);
    }
    table.replaceChildren(fragment);rowsShown=rows.length>0;hasLoaded=true;
    status.textContent=rowsShown?'Updated '+new Intl.DateTimeFormat('en',{hour:'2-digit',minute:'2-digit'}).format(new Date())+' · live shared scores':'No shared scores yet. Your next tower could be the first.';
    nextRefresh=Date.now()+15000;
  } catch(error) {
    status.textContent=rowsShown?'Connection interrupted. Showing the last loaded scores. Try Refresh again shortly.':'The shared leaderboard is unavailable right now. Try Refresh again shortly. Your game’s local records are unaffected.';
    nextRefresh=Date.now()+1000*(error.retryAfter??30);
  } finally {
    working=false;scoreSection.removeAttribute('aria-busy');
    setTimeout(()=>{refresh.disabled=false;},Math.max(0,nextRefresh-Date.now()));
  }
}
refresh.addEventListener('click',loadScores);
const scoreObserver=new IntersectionObserver(entries=>{
  if(entries.some(entry=>entry.isIntersecting)&&!hasLoaded){scoreObserver.disconnect();loadScores();}
},{rootMargin:'100px'});
scoreObserver.observe(scoreSection);
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    const image = document.getElementById('large-image');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    document.getElementById('large-caption').textContent = button.dataset.caption;
    document.getElementById('image-dialog').showModal();
  });
});
