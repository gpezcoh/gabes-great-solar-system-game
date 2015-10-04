function message()
{
	this.body;
	this.answerNumber;
	this.answers = [];
}

var thisMessage = new message();
var answer1 = new message();
var answer2 = new message();
var answer3 = new message();
var answer4 = new message();
var listOfAnswers = [answer1,answer2,answer3,answer4];
var testMessage = "Hello, I'm a test message! Do you understand?"
var testAnswer1 = "Sure do!";
var testAnswer2 = "Hell yeah!";
var testAnswer3 = "You bet!";
var testAnswer4 = "bruh";


function setMessages(message, answerList)
{
	thisMessage.body = message;
	thisMessage.answerNumber = answerList.length;
	thisMessage.answers = setAnswers(answerList);
	writingComms(thisMessage);
}

function setAnswers(answerList)
{
	for(var i = 0; i < 4; ++i)
	{
		if(i < answerList.length)
		{
			listOfAnswers[i].body = answerList[i];
			listOfAnswers[i].answerNumber = i + 1;
		}
		else
		{
			listOfAnswers[i].body = "";
			listOfAnswers[i].answerNumber = 0;
		}
	}
	return listOfAnswers;
}

function incomingMessage(number)
{
	switch(number){
		case 1:
			currentMessage = 1;
		    break;
	}
}

function clickAlert()
{
	// $("#interface").css({pointerEvents : "auto"});
	$("#alert").click(function () {
		$("#comms").css({ display: "auto"});
		setMessages(testMessage,[testAnswer1,testAnswer2,testAnswer3,testAnswer4]);
	});
}