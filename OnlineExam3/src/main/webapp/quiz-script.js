var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var answer = [];

function loadQuestion (questionIndex) 
{
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};


loadQuestion(currentQuestion);

/*
function loadNextQuestion () 
{
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	
	if(currentQuestion == totQuestions -1)
	{
		alert("You are at Last Question!");
	} 
	
	if (currentQuestion < totQuestions -1)
	{
	
	answer[currentQuestion] = selectedOption.value; 
	selectedOption.checked = false;
	alert(currentQuestion);
	currentQuestion++;
	}
	
	loadQuestion(currentQuestion);
}*/



function loadNextQuestion () 
{
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption)
	{
		alert('Please select your answer!');
		return;
	}
	answer[currentQuestion] = selectedOption.value;
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1)
	{
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions)
	{
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}



function loadPreviousQuestion ()
{
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption)
	{
		alert('Please select your answer!');
		return;
	}
	if(currentQuestion == 0)
	{
		alert("You are at First Question!");
	}
	answer[currentQuestion] = selectedOption.value;
	if(currentQuestion != 0)
	{
	answer[currentQuestion] = selectedOption.value;
	selectedOption.checked = false;
	alert(currentQuestion);
	currentQuestion--;
	loadQuestion(currentQuestion);
	return;
	}
}
function submitAnswer()
{
	for(var i = 0;i<totQuestions;i++)
	{
		if(answer[i] == questions[i].answer)
		{
			score +=1;
		}
	}
	container.style.display = 'none';
	resultCont.style.display = '';
	resultCont.textContent = 'Your Score: ' + score;
	return;
}