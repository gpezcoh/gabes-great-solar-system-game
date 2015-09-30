function createComms()
{
    comms  = document.createElement('div');
    comms.id = "comms";
    comms.className = "comms";
    comms.style.top = getDocHeight() - 300 + "px";
    comms.style.left = document.body.clientWidth/2 - 300 + "px";
    interface.appendChild(comms);
    commsTextBox = document.createElement('div');
    commsTextBox.id = "commsTextBox";
    commsTextBox.className = "commsTextBox";
    comms.appendChild(commsTextBox);
    var commsAnswerBox;
    for(var i = 1; i < 5; ++i)
    {
        commsAnswerBox = document.createElement('div');
        commsAnswerBox.id = "commsAnswerBox-" + i;
        commsAnswerBox.className = "commsAnswerBox";
        commsAnswerBox.style.top = getDocHeight() - 300 + 50 * i + "px";
        comms.appendChild(commsAnswerBox);
    }
    setMessages(testMessage,[testAnswer1,testAnswer2,testAnswer3,testAnswer4]);
}

function writingComms (message) {
    commsIndex = 0;
    var testInterval = setInterval(function() {writeQuestion(thisMessage.body,testInterval);},100);
}

function writeQuestion(message,testInterval)
{
    console.log(message.length)
    if(commsIndex === message.length)
    {
        clearInterval(testInterval);
        var testInterval = setInterval(function() {writeAnswers(thisMessage,testInterval);},100);
    }
    else
    {
        if(commsIndex % 30 === 0 && commsIndex != 0)
        {
            breakLine = true;
        }
        if(breakLine && message[commsIndex] === " ")
        {
            breakLine = false;
            commsTextBox.textContent = "";
            console.log("hello")
        }
        commsTextBox.textContent += message[commsIndex];
        ++commsIndex;
    }
}

function writeAnswers(message,testInterval)
{
    
}