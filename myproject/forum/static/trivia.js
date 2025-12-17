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
      },
      {
        q: "What is the process of verifying a user's identity called?",
        choices: ["Authorization", "Authentication", "Encryption"],
        correct: 1
      },
      {
        q: "Which command creates a new Django project?",
        choices: ["django-admin startapp", "python manage.py runserver", "django-admin startproject"],
        correct: 2
      },
  {
    q: "Which command starts the local development server?",
    choices: ["python manage.py runserver", "django-admin startserver", "python server.py start"],
    correct: 0 
  },
  {
    q: "In which file do you register new apps under INSTALLED_APPS?",
    choices: ["urls.py", "views.py", "settings.py"],
    correct: 2
  },
  {
    q: "Which Python file is used to define the logic (functions) for your pages?",
    choices: ["models.py", "views.py", "forms.py"],
    correct: 1
  },
  {
    q: "Which template tag is required in forms to prevent security attacks?",
    choices: ["{% secure_form %}", "{% csrf_token %}", "{% form_valid %}"],
    correct: 1
  },
  {
    q: "Which decorator is used to stop non-users from seeing a page?",
    choices: ["@login_required", "@admin_only", "@restrict_view"],
    correct: 0
  }
		];

		let index = 0;
let answered = false;
let score = 0;

		function showQuestion() {
      const q = questions[index];
      document.getElementById("score-display").textContent = `Score: ${score} / ${questions.length}`;
			document.getElementById("question").textContent = q.q;

			const choicesDiv = document.getElementById("choices");
			choicesDiv.innerHTML = "";

			q.choices.forEach((choice, i) => {
				const btn = document.createElement("button");
			  btn.className = 'btn secondary';
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
        score++;
			} else {
				result.textContent = "Wrong!";
			}
      document.getElementById("score-display").textContent = `Score: ${score} / ${questions.length}`;
			document.getElementById("nextBtn").disabled = false;
			answered = true;
		}

		function nextQuestion() {
			index++;
			if (index >= questions.length) {
				const container = document.querySelector('.trivia-container');
				container.innerHTML = `<h2>Finished!</h2><p>You scored ${score} out of ${questions.length}!</p><p>You completed the trivia.</p><p><a class="btn" href="/games/">Back to Games</a></p>`;
				return;
			}
			showQuestion();
		}

		showQuestion();
