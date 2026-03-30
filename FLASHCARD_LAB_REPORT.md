# A Mini Project Report  
# On  
# FLASHCARD GENERATOR  

---

**Submitted By**  
**Ms. Pulaparthi Naga Varshitha**  
**Regd. Number: 24B91A61K5**  

**DEPARTMENT OF COMPUTER SCIENCE ENGINEERING**  
**S. R. K. R ENGINEERING COLLEGE (A)**  
(Affiliated to JNTU, KAKINADA)  
BHIMAVARAM-534204  
(2024-2028)

---

## DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING  
## ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING  
## S. R. K. R ENGINEERING COLLEGE  
## BHIMAVARAM  

---

## CERTIFICATE  

This is to certify that this is a bonafide work on **FLASHCARD GENERATOR** for and has been submitted by **Mr. P.N.Varshitha (24B91A61K5)** as a Web Application Development Using Full Stack laboratory report, in partial fulfilment of the requirements for the award of the Degree of Bachelor of Technology in Artificial Intelligence and Machine learning, during the academic year 2024-2028. The candidate worked right under my Supervision and guidance.

---

**Lecturers In-Charge**

| Name | Position | Department | College |
|------|----------|------------|---------|
| K .D.V.PAVAN KUMAR VARMA | Assistant Professor | Department of CSE | S.R.K.R. Engineering College, Bhimavaram |
| CH Vinod Varma | Assistant Professor | Department of CSE | S.R.K.R. Engineering College, Bhimavaram |
| S Suryanarayana Raju | Assistant Professor | Department of CSE | S.R.K.R. Engineering College, Bhimavaram |

**Head of the Department**  
**Dr. V. CHANDRA SHEKHAR**  
Assistant professor, Head of the Department, Department of CSE, S.R.K.R. Engineering College, Bhimavaram.

---

## ACKNOWLEDGEMENT  

I take immense pleasure in thanking Dr. M. Jagapathi Raju, beloved principal of S.R.K.R Engineering College, Bhimavaram, and Dr. V. Chandra Shekar, esteemed Head of the Department (C.S.E), for having permitted me to carry out this Web Application Development Using Full Stack mini project work.

I wish to express my deep sense of gratitude especially to my project Guide, Sri. K D V PAVAN KUMAR VARMA, Assistant Professor, Sri Ch Vinod Varma, Assistant Professor, Sri S Suryanarayana Raju, Assistant Professor, for their guidance and useful suggestions, which helped me in completing the project work, on time.

Finally, yet importantly, I would like to express my heartful thanks to my beloved parents, faculty, my friends/classmates for their help, and my wishes for the successful completion of this project.

**Davuluri. Divakar**  
(20B91A0571)

---

## TABLE OF CONTENTS  

| S. No | CONTENTS | Page. No |
|-------|----------|----------|
| 1 | ABSTRACT | 5 |
| 2 | MODULES | 5 |
| 3 | SOFTWARE REQUIREMENTS | 5 |
| 4 | HARDWARE REQUIREMENTS | 5 |
| 5 | TECHNICAL STACK | 5 |
| 6 | SAMPLE CODE | 6-11 |
| 7 | SCREENSHOTS | 12-30 |
| 8 | LAB PROGRAMS | 31- |

---

## ABSTRACT  

The Flashcard Generator is a web application designed to help students and learners create, manage, and study digital flashcards efficiently. Traditional paper flashcards are often lost, damaged, or difficult to organize. This digital solution provides a convenient platform for creating interactive flashcards with various features to enhance the learning experience.

The application allows users to create custom flashcards with questions and answers, organize them by subjects or topics, and study them through interactive quiz modes. It includes features like difficulty levels, progress tracking, and performance analytics to help users monitor their learning progress.

By providing a user-friendly interface and advanced features like AI-powered card generation, the system makes learning more engaging and effective. It helps in better retention of information through spaced repetition and active recall techniques, ultimately improving the overall learning outcomes for students.

---

## MODULES  

1. **Home page** - Main dashboard with overview of flashcard decks
2. **Login page** - Secure user authentication
3. **Sign-up page** - New user registration
4. **Create Flashcards** - Interface for creating new flashcards
5. **Flashcard Management** - Edit, delete, and organize cards
6. **Study Mode** - Interactive quiz interface
7. **Progress Tracking** - Performance analytics and statistics
8. **Import/Export** - Data management features
9. **Settings** - User preferences and configurations
10. **Logout** - Secure session termination

---

## SOFTWARE REQUIREMENTS  

1. **Text Editor**: Visual Studio Code, Notepad++
2. **Front End**: HTML5, CSS3, JavaScript (ES6+)
3. **Internet Browser**: Google Chrome/Mozilla Firefox/Edge
4. **Version Control**: Git (optional)
5. **Package Manager**: npm (for development tools)

---

## HARDWARE REQUIREMENTS  

1. **Processor**: Intel Core I5 or equivalent
2. **RAM**: 8GB minimum
3. **Storage**: 256GB SSD
4. **Display**: 1920x1080 resolution
5. **Network**: Internet connection for online features

---

## TECHNICAL STACK  

### HTML5  
HTML5 provides the structural foundation for the web application. It offers semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, and `<article>` that improve accessibility and SEO. HTML5 also supports multimedia elements, local storage, and responsive design features essential for modern web applications.

### CSS3  
CSS3 handles the visual presentation and styling of the application. Features include Flexbox and Grid layouts for responsive design, CSS animations for smooth transitions, custom properties for theming, and media queries for mobile responsiveness. CSS3 enables the creation of an attractive and user-friendly interface.

### JavaScript (ES6+)  
JavaScript provides the dynamic functionality and interactivity. ES6+ features like arrow functions, destructuring, async/await, and modules make the code more maintainable. JavaScript handles DOM manipulation, event handling, local storage management, and application state management.

### Local Storage API  
The Local Storage API enables client-side data persistence, allowing users to save their flashcards and progress locally without requiring a server-side database. This provides offline functionality and faster data access.

---

## SAMPLE CODE  

### 1. index.html:
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FlashMaster - Flashcard Generator</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <nav class="glass-nav">
    <h2>🎯 FlashMaster</h2>
    <div class="actions">
      <button id="theme-btn">🌗 Theme</button>
      <input type="file" id="import-file" accept=".json" class="hidden">
      <button id="import-btn">📥 Import</button>
      <button id="export-btn">📤 Export</button>
    </div>
  </nav>

  <!-- EDIT MODE -->
  <section id="edit-mode">
    <div class="glass form-container">
      <h3>Create Flashcard</h3>
      <form id="card-form">
        <input type="text" id="q-input" placeholder="Question" required>
        <input type="text" id="a-input" placeholder="Answer" required>
        <select id="diff-input">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit" class="btn primary">Add Card</button>
      </form>
      <div class="ai-box">
        <input type="text" id="ai-topic" placeholder="Topic (e.g., Space)">
        <button id="ai-btn" class="btn secondary">Generate AI Cards</button>
      </div>
    </div>

    <div class="glass deck-container">
      <div class="deck-header">
        <h3>Your Deck (<span id="count">0</span>)</h3>
        <button id="start-btn" class="btn success" disabled>Start Quiz</button>
      </div>
      <div class="filters">
        <input type="text" id="search" placeholder="Search...">
        <select id="filter">
          <option value="all">All</option>
          <option value="starred">Starred</option>
          <option value="weak">Weak</option>
        </select>
      </div>
      <div id="deck-list" class="grid"></div>
    </div>
  </section>

  <!-- QUIZ MODE -->
  <section id="quiz-mode" class="hidden">
    <div class="glass quiz-container">
      <div class="quiz-head">
        <button id="exit-btn" class="btn danger">Exit</button>
        <span id="timer-display">No timer</span>
      </div>
      <div class="progress"><div class="fill" id="progress-fill"></div></div>
      <div class="scene">
        <div class="card" id="flashcard">
          <div class="face front">
            <h2 id="q-display">Q</h2>
            <p style="opacity: 0.6; font-size: 0.9rem;">Type your answer below</p>
          </div>
          <div class="face back">
            <h2 id="a-display">A</h2>
          </div>
        </div>
      </div>
      <div id="quiz-input-area" class="quiz-actions">
        <input type="text" id="user-answer" placeholder="Type your answer here..." style="margin-bottom: 0; flex: 1;" autocomplete="off">
        <button id="submit-answer-btn" class="btn primary">Check</button>
      </div>
      <div id="quiz-next-area" class="hidden quiz-actions" style="justify-content: space-between; width: 100%;">
        <p id="feedback-msg" style="font-weight:bold; align-self: center; margin: 0;"></p>
        <button id="next-btn" class="btn secondary">Next Question ➔</button>
      </div>
      <label><input type="checkbox" id="timer-toggle"> 15s Timer</label>
    </div>
  </section>

  <!-- RESULTS MODE -->
  <section id="results-mode" class="hidden">
    <div class="glass results-container text-center">
      <h2>Quiz Complete!</h2>
      <h1 id="score-display">0 / 0</h1>
      <p id="accuracy-display">0% Accuracy</p>
      
      <div class="weak-cards">
        <h3>Cards to Review</h3>
        <ul id="weak-list"></ul>
      </div>
      <button id="restart-btn" class="btn primary">Restart</button>
      <button id="edit-btn" class="btn secondary">Back to Editor</button>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

### 2. style.css:
```css
:root {
  --bg: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  --glass: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --text: #1e293b;
  --primary: #6366f1;
  --success: #10b981;
  --danger: #ef4444;
}

[data-theme="dark"] {
  --bg: linear-gradient(135deg, #0f172a, #1e1b4b);
  --glass: rgba(15, 23, 42, 0.7);
  --glass-border: rgba(255, 255, 255, 0.1);
  --text: #f8fafc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

body {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  padding-bottom: 2rem;
}

.hidden {
  display: none !important;
}

.text-center {
  text-align: center;
}

/* Components */
.glass {
  background: var(--glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.glass-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--glass);
  margin-bottom: 2rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: 0.2s;
}

.btn:hover {
  opacity: 0.9;
  transform: scale(0.98);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.primary {
  background: var(--primary);
}

.success {
  background: var(--success);
}

.danger {
  background: var(--danger);
}

.secondary {
  background: #64748b;
}

/* Layout */
#edit-mode {
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  flex-wrap: wrap;
}

.form-container {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.deck-container {
  flex: 2;
  min-width: 300px;
}

input, select {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--glass-border);
  width: 100%;
  margin-bottom: 0.5rem;
}

.deck-header, .filters, .quiz-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.ai-box {
  margin-top: 1rem;
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
}

/* Deck Item */
.deck-item {
  background: var(--glass);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
  display: flex;
  flex-direction: column;
}

.deck-item h4 {
  margin-bottom: 0.5rem;
}

.deck-item p {
  flex: 1;
  margin-bottom: 0.5rem;
}

.deck-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.icon-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
}

/* Quiz Scene */
.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress {
  height: 8px;
  background: rgba(0,0,0,0.1);
  border-radius: 4px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: var(--primary);
  width: 0%;
  transition: width 0.3s ease;
}

.scene {
  perspective: 1000px;
  height: 350px;
  width: 100%;
  cursor: pointer;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: var(--glass);
  color: var(--text);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border: 1px solid var(--glass-border);
}

.back {
  transform: rotateY(180deg);
  border: 2px solid var(--primary);
}

.quiz-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

/* Results */
.results-container {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.weak-cards ul {
  list-style-position: inside;
  text-align: left;
}
```

### 3. script.js (Partial):
```javascript
// Flashcard Generator JavaScript
class FlashcardApp {
  constructor() {
    this.cards = [];
    this.currentCardIndex = 0;
    this.score = 0;
    this.totalQuestions = 0;
    this.weakCards = [];
    this.timer = null;
    this.timeLeft = 15;
    
    this.initializeElements();
    this.loadCards();
    this.attachEventListeners();
  }

  initializeElements() {
    // Form elements
    this.cardForm = document.getElementById('card-form');
    this.qInput = document.getElementById('q-input');
    this.aInput = document.getElementById('a-input');
    this.diffInput = document.getElementById('diff-input');
    
    // Display elements
    this.countDisplay = document.getElementById('count');
    this.deckList = document.getElementById('deck-list');
    
    // Quiz elements
    this.qDisplay = document.getElementById('q-display');
    this.aDisplay = document.getElementById('a-display');
    this.flashcard = document.getElementById('flashcard');
    this.userAnswer = document.getElementById('user-answer');
    
    // Results elements
    this.scoreDisplay = document.getElementById('score-display');
    this.accuracyDisplay = document.getElementById('accuracy-display');
    this.weakList = document.getElementById('weak-list');
  }

  attachEventListeners() {
    this.cardForm.addEventListener('submit', (e) => this.addCard(e));
    document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
    document.getElementById('exit-btn').addEventListener('click', () => this.exitQuiz());
    document.getElementById('submit-answer-btn').addEventListener('click', () => this.checkAnswer());
    document.getElementById('next-btn').addEventListener('click', () => this.nextCard());
    document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
    document.getElementById('edit-btn').addEventListener('click', () => this.backToEditor());
    
    // Theme toggle
    document.getElementById('theme-btn').addEventListener('click', () => this.toggleTheme());
    
    // Import/Export
    document.getElementById('export-btn').addEventListener('click', () => this.exportCards());
    document.getElementById('import-btn').addEventListener('click', () => this.importCards());
    
    // Search and filter
    document.getElementById('search').addEventListener('input', (e) => this.filterCards(e.target.value));
    document.getElementById('filter').addEventListener('change', (e) => this.filterByType(e.target.value));
    
    // Timer toggle
    document.getElementById('timer-toggle').addEventListener('change', (e) => this.toggleTimer(e.target.checked));
    
    // Card flip
    this.flashcard.addEventListener('click', () => this.flipCard());
  }

  addCard(e) {
    e.preventDefault();
    
    const card = {
      id: Date.now(),
      question: this.qInput.value.trim(),
      answer: this.aInput.value.trim(),
      difficulty: this.diffInput.value,
      starred: false,
      weakCount: 0,
      correctCount: 0
    };
    
    this.cards.push(card);
    this.saveCards();
    this.renderCards();
    this.cardForm.reset();
    this.updateStats();
  }

  renderCards() {
    this.deckList.innerHTML = '';
    
    this.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'deck-item';
      cardElement.innerHTML = `
        <h4>${card.question}</h4>
        <p>${card.answer}</p>
        <div class="deck-actions">
          <button class="icon-btn" onclick="app.toggleStar(${card.id})">
            ${card.starred ? '⭐' : '☆'}
          </button>
          <button class="icon-btn" onclick="app.deleteCard(${card.id})">🗑️</button>
        </div>
      `;
      this.deckList.appendChild(cardElement);
    });
    
    this.countDisplay.textContent = this.cards.length;
    document.getElementById('start-btn').disabled = this.cards.length === 0;
  }

  startQuiz() {
    if (this.cards.length === 0) return;
    
    this.currentCardIndex = 0;
    this.score = 0;
    this.totalQuestions = this.cards.length;
    this.weakCards = [];
    
    this.shuffleCards();
    this.showQuizMode();
    this.displayCard();
  }

  displayCard() {
    const card = this.cards[this.currentCardIndex];
    this.qDisplay.textContent = card.question;
    this.aDisplay.textContent = card.answer;
    this.userAnswer.value = '';
    
    this.flashcard.classList.remove('flipped');
    document.getElementById('quiz-input-area').classList.remove('hidden');
    document.getElementById('quiz-next-area').classList.add('hidden');
    
    this.updateProgress();
    
    if (this.timer) {
      this.startTimer();
    }
  }

  checkAnswer() {
    const card = this.cards[this.currentCardIndex];
    const userAnswer = this.userAnswer.value.trim().toLowerCase();
    const correctAnswer = card.answer.toLowerCase();
    
    const isCorrect = userAnswer === correctAnswer || 
                     userAnswer.includes(correctAnswer) || 
                     correctAnswer.includes(userAnswer);
    
    if (isCorrect) {
      this.score++;
      card.correctCount++;
    } else {
      card.weakCount++;
      if (!this.weakCards.find(c => c.id === card.id)) {
        this.weakCards.push(card);
      }
    }
    
    this.flashcard.classList.add('flipped');
    document.getElementById('quiz-input-area').classList.add('hidden');
    document.getElementById('quiz-next-area').classList.remove('hidden');
    
    const feedbackMsg = document.getElementById('feedback-msg');
    feedbackMsg.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
    feedbackMsg.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
    
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nextCard() {
    this.currentCardIndex++;
    
    if (this.currentCardIndex < this.cards.length) {
      this.displayCard();
    } else {
      this.showResults();
    }
  }

  showResults() {
    document.getElementById('quiz-mode').classList.add('hidden');
    document.getElementById('results-mode').classList.remove('hidden');
    
    const accuracy = Math.round((this.score / this.totalQuestions) * 100);
    this.scoreDisplay.textContent = `${this.score} / ${this.totalQuestions}`;
    this.accuracyDisplay.textContent = `${accuracy}% Accuracy`;
    
    this.weakList.innerHTML = '';
    this.weakCards.forEach(card => {
      const li = document.createElement('li');
      li.textContent = `${card.question} - ${card.answer}`;
      this.weakList.appendChild(li);
    });
    
    this.saveCards();
  }

  saveCards() {
    localStorage.setItem('flashcards', JSON.stringify(this.cards));
  }

  loadCards() {
    const saved = localStorage.getItem('flashcards');
    if (saved) {
      this.cards = JSON.parse(saved);
      this.renderCards();
    }
  }

  exportCards() {
    const data = JSON.stringify(this.cards, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards.json';
    a.click();
  }

  importCards() {
    document.getElementById('import-file').click();
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

// Initialize the application
const app = new FlashcardApp();
```

---

## SCREENSHOTS  

### 1. LOGIN PAGE:
![Login Page](screenshots/login.png)

### 2. SIGNUP PAGE:
![Signup Page](screenshots/signup.png)

### 3. HOMEPAGE/DASHBOARD:
![Homepage](screenshots/homepage.png)

### 4. CREATE FLASHCARDS:
![Create Flashcards](screenshots/create-flashcards.png)

### 5. FLASHCARD DECK:
![Flashcard Deck](screenshots/flashcard-deck.png)

### 6. QUIZ MODE:
![Quiz Mode](screenshots/quiz-mode.png)

### 7. FLIPPED CARD:
![Flipped Card](screenshots/flipped-card.png)

### 8. RESULTS SCREEN:
![Results Screen](screenshots/results.png)

### 9. DARK MODE:
![Dark Mode](screenshots/dark-mode.png)

### 10. IMPORT/EXPORT:
![Import Export](screenshots/import-export.png)

---

## LAB PROGRAMS  

### Program 1: Basic Flashcard Creation
```javascript
function createFlashcard(question, answer, difficulty) {
  return {
    id: Date.now(),
    question: question,
    answer: answer,
    difficulty: difficulty,
    createdAt: new Date().toISOString()
  };
}
```

### Program 2: Local Storage Management
```javascript
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
}
```

### Program 3: Quiz Logic
```javascript
function checkAnswer(userAnswer, correctAnswer) {
  const normalizedUser = userAnswer.toLowerCase().trim();
  const normalizedCorrect = correctAnswer.toLowerCase().trim();
  
  return normalizedUser === normalizedCorrect ||
         normalizedUser.includes(normalizedCorrect) ||
         normalizedCorrect.includes(normalizedUser);
}
```

### Program 4: Progress Tracking
```javascript
function calculateProgress(cards) {
  const total = cards.length;
  const mastered = cards.filter(card => 
    card.correctCount > card.weakCount && card.correctCount >= 3
  ).length;
  
  return {
    total: total,
    mastered: mastered,
    percentage: Math.round((mastered / total) * 100) || 0
  };
}
```

---

**End of Report**
