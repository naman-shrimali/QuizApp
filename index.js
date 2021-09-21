const restartBtn = document.getElementById('rst');
const previousBtn =document.getElementById('prev'); 
const nextBtn = document.getElementById('nxt');
const submitBtn = document.getElementById('smt');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const userScore = document.getElementById('user-score');
const ques = document.getElementById('question');
const scoreContainer = document.getElementById('score');
const design = document.getElementsByClassName('design');
const time = document.getElementById('time');
const section1 = document.getElementById('first');
const section2 = document.getElementById('second');
const section3 = document.getElementById('third');

var userSelection = [];
var isAnswered = [];

design[1].style.color="green";
design[2].style.color="pink";
design[3].style.color="orange";

console.log(design);
document.getElementById('second').classList.add('hide');
let currentQuestion = 0;
var score = 0;
var timer = 1;
let questions = JSON.parse(medium);
console.log(questions);
restartBtn.addEventListener('click',restart);
previousBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);
//nextBtn.addEventListener('click',currentQuestion++);
//previousBtn.addEventListener('click',currentQuestion--);

var arr = [a,b,c,d];
var array = ['a','b','c','d'];
//console.log(arr[0]);

//-----------------------------------------------------/Begin Quiz/---------------------------------------------------------------------------------------///
function beginQuiz()
{
	/*for(var i=0;i<=3;i++)
	{		console.log('inside loop');
	if(questions[currentQuestion].isAnswered)
	{
		console.log('whiteToggle assigning');
	
		if(userSelection[currentQuestion]==i)
		{
			console.log(array[i]);
		var element = document.getElementById(array[i]);
		element.classList.add("whiteToggle");
		console.log('whiteToggle assigned to');
		}
	}
	else 
		{
			var element = document.getElementById(array[i]);
		element.classList.remove("whiteToggle");
		console.log('whiteToggle deleted from');
		}
   }*/

   for(let i=0;i<=3;i++)
		{
			var element = document.getElementById(array[i]);
		element.classList.remove("whiteToggle");
		console.log('whiteToggle deleted from');
		}

	if(questions[currentQuestion].isAnswered)
	{
		console.log('whiteToggle assigning');
	for(var i=0;i<=3;i++)
	{		console.log('inside loop');
		if(userSelection[currentQuestion]==i)
		{
			console.log(array[i]);
		var element = document.getElementById(array[i]);
		element.classList.add("whiteToggle");
		console.log('whiteToggle assigned to');
		}
	}
   }
	section1.style.visibility = "visible";
	section2.style.visibility = "visible";
	previousBtn.style.visibility="visible";
	nextBtn.style.visibility="visible";
	//console.log("begin quiz called");
	a.classList.remove('hide');
	b.classList.remove('hide');
	c.classList.remove('hide');
	d.classList.remove('hide');
	nextBtn.classList.remove('hide');
	submitBtn.classList.remove('hide');
	time.classList.remove('hide');
	run_clock(timer);
	//console.log("start");
	currentQuestion=0;
	ques.innerHTML=questions[currentQuestion].question;
	console.log(ques.innerHTML);
	//
	//arr[0].innerHTML=questions[currentQuestion].answers[0].option;
	//console.log(questions[currentQuestion].answers[0].option);
	//console.log(arr[0].innerHTML);
	//
	for(let i=0;i<=3;i++)
{
	arr[i].innerHTML=questions[currentQuestion].answers[i].option;
	console.log(arr[i].innerHTML);
	arr[i].onclick = () => {
		arr[i].classList.add("whiteToggle");
		if(questions[currentQuestion].answers[i].answer){
			if(score<5)
			{
				score++;
				//console.log(questions[currentQuestion].answers[i]);
				userSelection[currentQuestion] = i;
				console.log(userSelection);
				questions[currentQuestion].isAnswered = true;
				console.log(questions[currentQuestion].isAnswered);
			}
		}
			else
			{
			console.log(questions[currentQuestion].answers[i]);
			userSelection[currentQuestion] = i;
			console.log(userSelection);
			questions[currentQuestion].isAnswered = true;
			console.log(questions[currentQuestion].isAnswered);
		}
		userScore.innerHTML=score;
		if(currentQuestion<2){
			//currentQuestion++;
			next();
		}
	}
}	
	//startBtn.classList.add('hide');
	previousBtn.classList.add('hide');
	scoreContainer.classList.add('hide');
}


//--------------------------------------------------------------/Restart/----------------------------------------------------------------//
function restart() 
{
	//console.log("restart");
	currentQuestion=0;
	//restartBtn.addEventListener('dblclick',window.location.reload());
	//restartBtn.addEventListener('click',window.location='#zeroth');
	//previousBtn.classList.remove('hide');
	//nextBtn.classList.remove('hide');
	//submitBtn.classList.remove('hide');
	/*a.classList.remove('hide');onClick=" window.location.reload()"
	b.classList.remove('hide');
	c.classList.remove('hide');
	d.classList.remove('hide');*/
	//const time = time;
	//time.parentNode.removeChild(time);
	//run_clock(0);
	//score=0;
	//userScore.innerHTML=score;
	//beginQuiz();
}
//--------------------------------------------------------------------/Next/------------------------------------------------------------//
function next()
{
	
	if(currentQuestion!==questions.length){
	currentQuestion++;}
	console.log(questions[currentQuestion].isAnswered);

	for(var i=0;i<=3;i++)
	{
			var element = document.getElementById(array[i]);
		element.classList.remove("whiteToggle");
		console.log('whiteToggle deleted from');
   	}

	for(var i=0;i<=3;i++)
	{		console.log('inside loop');
	if(questions[currentQuestion].isAnswered)
	{
		console.log('whiteToggle assigning');
	
		if(userSelection[currentQuestion]==i)
		{
			console.log(array[i]);
		var element = document.getElementById(array[i]);
		element.classList.add("whiteToggle");
		console.log('whiteToggle assigned to');
		}
	}
	}
	
	
	if(currentQuestion<=questions.length-1)
	{
	//console.log("next");
	
	if(currentQuestion>=questions.length-1)
	{
		nextBtn.classList.add('hide');
		previousBtn.classList.remove('hide');
	}
	console.log(currentQuestion);
	//console.log(questions.length);
	ques.innerHTML=questions[currentQuestion].question;
	for(let i=0;i<=3;i++)
{
	arr[i].innerHTML=questions[currentQuestion].answers[i].option;
	arr[i].onclick = () => {
		arr[i].classList.add("whiteToggle");
		if(questions[currentQuestion].answers[i].answer){
			if(score<5)
			{
				score++;
				console.log(questions[currentQuestion].answers[i]);
				userSelection[currentQuestion] = i;
				console.log(userSelection);
				questions[currentQuestion].isAnswered = true;
				console.log(questions[currentQuestion].isAnswered);
			}
		}
		else
			{
			console.log(questions[currentQuestion].answers[i]);
			userSelection[currentQuestion] = i;
			console.log(userSelection);
			questions[currentQuestion].isAnswered = true;
			console.log(questions[currentQuestion].isAnswered);
		}
		userScore.innerHTML=score;
		//currentQuestion++;
		console.log(currentQuestion);
		if(currentQuestion<questions.length-1){
			next();
		}
		else {
			submit();
		}
	}
}
	previousBtn.classList.remove('hide');
	}
}

//--------------------------------Previous button----------------------------------------------//

function previous()
{
	currentQuestion--;

	/*for(var i=0;i<=3;i++)
	{		console.log('inside loop');
	if(questions[currentQuestion].isAnswered)
	{
		console.log('whiteToggle assigning');
	
		if(userSelection[currentQuestion]==i)
		{
			console.log(array[i]);
		var element = document.getElementById(array[i]);
		element.classList.add("whiteToggle");
		console.log('whiteToggle assigned to');
		}
	}
	else 
		{
			var element = document.getElementById(array[i]);
		element.classList.remove("whiteToggle");
		console.log('whiteToggle deleted from');
		}
   }*/

   for(var i=0;i<=3;i++)
	{
			var element = document.getElementById(array[i]);
		element.classList.remove("whiteToggle");
		console.log('whiteToggle deleted from');
   	}


	if(questions[currentQuestion].isAnswered)
	{
		console.log('whiteToggle assigning');
	for(var i=0;i<=3;i++)
	{		console.log('inside loop');
		if(userSelection[currentQuestion]==i)
		{
			console.log(array[i]);
		var element = document.getElementById(array[i]);
		element.classList.add("whiteToggle");
		console.log('whiteToggle assigned to');
		}
	}
   }
	if(currentQuestion>=0)
	{//console.log("previous");
	//currentQuestion--;
	console.log(currentQuestion);
	if(currentQuestion<=0)
	{
		previousBtn.classList.add('hide');
		nextBtn.classList.remove('hide');
	}
	ques.innerHTML=questions[currentQuestion].question;
	for(let i=0;i<=3;i++)
{
	arr[i].innerHTML=questions[currentQuestion].answers[i].option;
	arr[i].onclick = () => {
		arr[i].classList.add("whiteToggle");
		if(questions[currentQuestion].answers[i].answer){
			if(score<5)
			{
				score++;
				console.log(questions[currentQuestion].answers[i]);
				userSelection[currentQuestion] = i;
				console.log(userSelection);
				questions[currentQuestion].isAnswered = true;
				console.log(questions[currentQuestion].isAnswered);
			}
		}
		else{
			score--;
			console.log(questions[currentQuestion].answers[i]);
			userSelection[currentQuestion] = i;
			console.log(userSelection);
			questions[currentQuestion].isAnswered = true;
			console.log(questions[currentQuestion].isAnswered);
		}
		if(score>=0){
		userScore.innerHTML=score;}
		else {
			userScore.innerHTML=0;
		}
		if(currentQuestion<questions.length-1){
			next();
		}
	}
}
	nextBtn.classList.remove('hide');
}
}
//---------------------------------------------/Submit/-------------------------------------------------------------------------//
function submit()
{
	//console.log("submitted");
	scoreContainer.classList.remove('hide');
	previousBtn.classList.add('hide');
	nextBtn.classList.add('hide');
	submitBtn.classList.add('hide');
	a.classList.add('hide');
	b.classList.add('hide');
	c.classList.add('hide');
	d.classList.add('hide');
	for(var i=0;i<design.length;i++) {
	design[i].classList.add("hide");}
	time.classList.add('hide');
	ques.classList.remove('text-center');
	ques.classList.add('text-center','justify-content-center');
	console.log(ques.classList);
	ques.innerHTML="Thanks for Participating, Your Score is "+score;
}
/*function start() {
run_clock(deadline);
}*/
function time_remaining(deadline){
	var t = Date.parse(deadline) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(time_in_minutes){
	var current_time = Date.parse(new Date());
	var deadline = new Date(current_time + time_in_minutes*60*1000);
    console.log(deadline);
    //console.log(id);
    const clock = time;
    console.log(clock);
	function update_clock(){
		var t = time_remaining(deadline);
		clock.innerHTML = 'Minutes: '+t.minutes+':'+t.seconds;
		if(t.minutes==0&&t.seconds==0)
		{
			previousBtn.classList.add('hide');
			nextBtn.classList.add('hide');
			submitBtn.classList.add('hide');
			a.classList.add('hide');
			b.classList.add('hide');
			c.classList.add('hide');
			d.classList.add('hide');
			time.classList.add('hide');
			ques.innerHTML="You have exceeded the Time Limit \n Your Score is : "+score;
			
		}
		time.style.color="#ef9614";
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}

function hideStartBtn() {
	//const startBtn = document.getElementById('start');
	const startContainer = document.getElementById('startContainer');
	startContainer.parentNode.removeChild(startContainer);
	//console.log("hiding");
	//startBtn.classList.add('hide');
}

/*var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(deadline){
    console.log(deadline);
	var t = Date.parse(deadline) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(deadline){
	var clock = time;
	function update_clock(){
		var t = time_remaining(deadline);
		clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}*/
//run_clock('time',deadline);