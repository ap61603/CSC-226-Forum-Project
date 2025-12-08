const questions = [
			{
				q: "Which header tag in HTML is the largest?",
				choices: ["<h1>", "<h4>", "<h6>"],
				correct: 0
			},
			{
				q: "Which language uses console.log() to print to the console?",
				choices: ["HTML", "JavaScript", "Python"],
				correct: 1
			},
			{
				q: "Which symbol is used to select a class in CSS?",
				choices: ["#", ".", "&"],
				correct: 1
			}
		];

		let index = 0;
		let answered = false;

		function showQuestion() {
			const q = questions[index];
			document.getElementById("question").textContent = q.q;

			const choicesDiv = document.getElementById("choices");
			choicesDiv.innerHTML = "";

			q.choices.forEach((choice, i) => {
				const btn = document.createElement("button");
				btn.textContent = choice;
				btn.onclick = () => checkAnswer(i);
				choicesDiv.appendChild(btn);
				choicesDiv.appendChild(document.createElement("br"));
			});

			document.getElementById("result").textContent = "";
			document.getElementById("nextBtn").disabled = true;
			answered = false;
		}

		function checkAnswer(i) {
			if (answered) return;

			const correct = questions[index].correct;
			const result = document.getElementById("result");

			if (i === correct) {
				result.textContent = "Correct!";
			} else {
				result.textContent = "Wrong!";
			}

			document.getElementById("nextBtn").disabled = false;
			answered = true;
		}

		function nextQuestion() {
			index++;
			if (index >= questions.length) {
				document.body.innerHTML = "<h2>Finished!</h2><p>You completed the trivia.</p>";
				return;
			}
			showQuestion();
		}

		showQuestion();
