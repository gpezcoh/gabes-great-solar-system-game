function message(body,answerNumber)
{
	this.body = body;
	this.answerNumber = answerNumber;
	this.answers = [];
	this.child;
	this.followup;
}

var thisMessage = new message();
var answer1 = new message();
var answer2 = new message();
var answer3 = new message();
var answer4 = new message();
var listOfAnswers = [answer1,answer2,answer3,answer4];

var testMessage = createMessage("Hello, I'm a test message! Do you understand?",0)
var testAnswer1 = createMessage("Sure do!",1)
var testAnswer2 = createMessage("Hell yeah!",2)
var testAnswer3 = createMessage("You bet!",3)
var testAnswer4 = createMessage("bruh",4)
testMessage.answers = [testAnswer1,testAnswer2,testAnswer3,testAnswer4];

function createMessage(string,num){
	return new message(string,num);
}

function setMessages(message)
{
	thisMessage = message;
	thisMessage.answerNumber = message.answers.length;
	thisMessage.answers = message.answers;
	writingComms(thisMessage);
	$("#comms").css({ display: "inline"});
	$("#alert").animate({ opacity: 0},700);
}

function incomingMessage(message)
{
	currentMessage = message;
	$("#alert").animate({ opacity: 1},700);
	$("#alert").click(function () {
		setMessages(message);
	});
}

function answered(){
	for(var i = 1;i<5;++i){
		document.getElementById("commsAnswerBox-" + i).textContent = "";
		$("#commsAnswerBox-" + i).animate({ opacity: 0},700);
	}
	commsTextBox.textContent = "";
	if(answer){
		answer = currentMessage.answers[answer - 1];
		if(answer.child){
			setMessages(answer.child);
		}
		else{
			$("#comms").css({ display: "none"});
		}
	}
	else{
		$("#comms").css({ display: "none"});
	}
}
