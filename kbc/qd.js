const questions = [
  {
    question: "भारत के प्रधानमंत्री कौन हैं?",
    options: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "मनमोहन सिंह"],
    answer: "नरेंद्र मोदी"
  },
  {
    question: "फ्रांस की राजधानी क्या है?",
    options: ["रोम", "बर्लिन", "पेरिस", "मैड्रिड"],
    answer: "पेरिस"
  },
  {
    question: "दुनिया में कुल कितने महाद्वीप हैं?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "लाल ग्रह किसे कहा जाता है?",
    options: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer: "मंगल"
  },
  {
    question: "सबसे बड़ा महासागर कौन सा है?",
    options: ["अटलांटिक", "हिंद महासागर", "आर्कटिक", "प्रशांत"],
    answer: "प्रशांत"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = "Q. " + q.question;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, q.answer);
    optionsEl.appendChild(btn);
  });

  scoreEl.textContent = `🏆 जीत की राशि: ₹${score}`;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score += 10000;
    alert("✅ सही जवाब!");
  } else {
    alert("❌ गलत जवाब! खेल खत्म।\nआपकी राशि: ₹" + score);
    nextBtn.disabled = true;
    Array.from(document.getElementsByClassName('option')).forEach(btn => btn.disabled = true);
    return;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 बधाई हो! आपने ₹" + score + " जीत लिए!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', loadQuestion);
loadQuestion();
