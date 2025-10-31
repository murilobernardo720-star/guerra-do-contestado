const quizData = [
  {
    question: "Em que ano começou a Guerra do Contestado?",
    options: ["1910", "1912", "1914", "1916"],
    answer: 1
  },
  {
    question: "Qual estado NÃO esteve envolvido diretamente no conflito?",
    options: ["Paraná", "Santa Catarina", "São Paulo", "Goiás"],
    answer: 3
  },
  {
    question: "Qual foi uma das principais causas da guerra?",
    options: [
      "Disputa por petróleo",
      "Construção de ferrovia",
      "Crise do café",
      "Independência do Brasil"
    ],
    answer: 1
  }
];

const quizContainer = document.getElementById("quiz-container");

quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${q.question}</p>`;
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.answer) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    };
    div.appendChild(btn);
  });
  quizContainer.appendChild(div);
});
