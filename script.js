function playMusic() {
  const audio = document.getElementById("audio");
  if (audio) {
    audio.play();
  }
}

const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    answer: 1
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Graciliano Ramos"],
    answer: 0
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Saturno", "Júpiter", "Marte"],
    answer: 2
  },
  {
    question: "Qual é a fórmula da água?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1
  },
  {
    question: "Quantos continentes existem?",
    options: ["5", "6", "7", "8"],
    answer: 2
  }
];

if (document.getElementById("quiz-container")) {
  const container = document.getElementById("quiz-container");

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<strong>${i + 1}. ${q.question}</strong><br/>`;

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        div.classList.add(idx === q.answer ? "correct" : "incorrect");
        setTimeout(() => {
          div.classList.remove("correct", "incorrect");
        }, 1000);
      };
      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}
