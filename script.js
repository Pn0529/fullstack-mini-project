// State
let appState = 'edit';
let deck = JSON.parse(localStorage.getItem('flashDeck')) || [];
let quizCards = [], qIdx = 0, score = 0, timer, timeLeft = 15;

// Elements
const $ = id => document.getElementById(id);
const views = { edit: $('edit-mode'), quiz: $('quiz-mode'), res: $('results-mode') };

// Render Deck
const renderDeck = () => {
  const term = $('search').value.toLowerCase();
  const filter = $('filter').value;
  $('count').innerText = deck.length;
  $('start-btn').disabled = deck.length === 0;
  
  let list = deck.filter(c => c.q.toLowerCase().includes(term));
  if(filter === 'starred') list = list.filter(c => c.star);
  if(filter === 'weak') list = list.filter(c => c.w > c.c);
  
  $('deck-list').innerHTML = list.map(c => `
    <div class="deck-item">
      <h4>${c.star ? '⭐ ' : ''}${c.q}</h4>
      <p style="font-size:0.8rem">${c.a}</p>
      <div style="font-size:0.8rem; margin:0.5rem 0;">✅ ${c.c} | ❌ ${c.w} | ${c.diff}</div>
      <div class="deck-actions">
        <button class="icon-btn" onclick="toggleStar(${c.id})">⭐</button>
        <button class="icon-btn text-danger" onclick="delCard(${c.id})">🗑️</button>
      </div>
    </div>
  `).join('');
};

// CRUD
$('card-form').onsubmit = e => {
  e.preventDefault();
  deck.push({ id: Date.now(), q: $('q-input').value, a: $('a-input').value, diff: $('diff-input').value, star: false, c: 0, w: 0 });
  save(); $('card-form').reset();
};
window.delCard = id => { deck = deck.filter(c => c.id !== id); save(); };
window.toggleStar = id => { let c = deck.find(c => c.id === id); c.star = !c.star; save(); };
const save = () => { localStorage.setItem('flashDeck', JSON.stringify(deck)); renderDeck(); };

// AI Mock (simulated async fetch)
$('ai-btn').onclick = async () => {
  const t = $('ai-topic').value;
  if(!t) return alert('Enter topic');
  $('ai-btn').innerText = "Generating...";
  setTimeout(() => {
    deck.push({ id: Date.now() + 1, q: `Core concept of ${t}?`, a: `Fundamental principles structuring ${t}.`, diff: 'medium', star: false, c:0, w:0 });
    deck.push({ id: Date.now() + 2, q: `Example use case for ${t}?`, a: `Optimizing related systems or processes.`, diff: 'easy', star: false, c:0, w:0 });
    save(); $('ai-btn').innerText = "Generate AI Cards"; $('ai-topic').value='';
  }, 1000);
};

// Search & Filter listeners
$('search').oninput = renderDeck;
$('filter').onchange = renderDeck;

// Quiz Logic
const switchView = view => { 
  appState = view; 
  Object.values(views).forEach(v => v.classList.add('hidden')); 
  views[view].classList.remove('hidden'); 
};

$('start-btn').onclick = () => {
  // Simple Spaced Repetition sorting (weighted by missed)
  quizCards = [...deck].sort((a,b) => (b.w - b.c) - (a.w - a.c) + (Math.random()-0.5));
  qIdx = 0; score = 0; switchView('quiz'); showCard();
};

const showCard = () => {
  if(qIdx >= quizCards.length) return endQuiz();
  $('flashcard').classList.remove('flipped');
  $('quiz-actions').classList.add('hidden');
  $('q-display').innerText = quizCards[qIdx].q;
  $('a-display').innerText = quizCards[qIdx].a;
  $('progress-fill').style.width = `${((qIdx) / quizCards.length) * 100}%`;
  
  if($('timer-toggle').checked) {
    timeLeft = 15; $('timer-display').innerText = `${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(() => {
      $('timer-display').innerText = `${--timeLeft}s`;
      if(timeLeft <= 0) { 
        clearInterval(timer); 
        $('flashcard').classList.add('flipped'); 
        setTimeout(() => answer(false), 1500); 
      }
    }, 1000);
  } else { $('timer-display').innerText = "No timer"; }
};

$('flashcard').onclick = () => {
  if($('flashcard').classList.contains('flipped')) return;
  $('flashcard').classList.add('flipped');
  $('quiz-actions').classList.remove('hidden');
  clearInterval(timer);
};

const answer = (correct) => {
  const rc = deck.find(c => c.id === quizCards[qIdx].id);
  // WebAudio API simple feedback beep could go here
  correct ? (rc.c++, score++) : rc.w++;
  save(); qIdx++; showCard();
};

$('got-btn').onclick = () => answer(true);
$('missed-btn').onclick = () => answer(false);
$('exit-btn').onclick = () => { clearInterval(timer); switchView('edit'); };

const endQuiz = () => {
  clearInterval(timer);
  switchView('res');
  $('score-display').innerText = `${score} / ${quizCards.length}`;
  $('accuracy-display').innerText = `${Math.round((score/quizCards.length)*100)}% Accuracy`;
  const weak = quizCards.filter(c => c.w > c.c);
  $('weak-list').innerHTML = weak.map(c => `<li>${c.q}</li>`).join('') || "<li>No weak cards! Great job!</li>";
};

$('restart-btn').onclick = $('start-btn').onclick;
$('edit-btn').onclick = () => switchView('edit');

// Theme Toggle
$('theme-btn').onclick = () => {
  const root = document.documentElement;
  const th = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', th);
};

// Import / Export JSON
$('export-btn').onclick = () => {
  const blob = new Blob([JSON.stringify(deck)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'deck.json'; a.click();
};
$('import-btn').onclick = () => $('import-file').click();
$('import-file').onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = ev => { 
    try {
      deck = JSON.parse(ev.target.result); 
      save(); 
      alert('Deck imported successfully!');
    } catch(err) {
      alert('Invalid JSON file.');
    }
  };
  r.readAsText(file);
};

// Init
renderDeck(); switchView('edit');
