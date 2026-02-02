const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const quizSection = document.getElementById('quiz-section');
const celebration = document.getElementById('celebration');

let noClickCount = 0;

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    if (noClickCount < 5) {
        // Make the button run away
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        
        // Change text to be more persuasive
        const phrases = ["Are you sure?", "Think again!", "Pwease?", "Wrong button!"];
        noBtn.innerText = phrases[noClickCount % phrases.length];
    } else {
        // Transform "No" into a second "Yes" button
        noBtn.innerText = "Yes (Okay fine)";
        noBtn.style.backgroundColor = "#ff4081";
        noBtn.style.position = "static";
        noBtn.onclick = startCelebration;
    }
});

yesBtn.addEventListener('click', startCelebration);

function startCelebration() {
    quizSection.classList.add('hidden');
    celebration.classList.remove('hidden');
}
