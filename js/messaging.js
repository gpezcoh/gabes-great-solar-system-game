function message()
{
	this.body;
	this.answerNumber;
	this.correspondingAnswers = [];
}

var thisMessage = new message();
var answer1 = new message();
var answer2 = new message();
var answer3 = new message();
var answer4 = new message();
var testMessage = "Hello, I'm a test message! Do you understand?"
var testAnswer1 = "Sure do!";
var testAnswer2 = "Hell yeah!";
var testAnswer3 = "You bet!";
var testAnswer4 = "bruh";


function setMessages(message, answerList)
{
	thisMessage.body = message;
	thisMessage.answerNumber = answerList.length;
	thisMessage.correspondingAnswers = answerList;
	writingComms(thisMessage);
}