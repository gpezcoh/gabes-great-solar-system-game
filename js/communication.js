var messageSpeed = 80;

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
    alert  = document.createElement('div');
    alert.id = "alert";
    alert.className = "alert";
    interface.appendChild(alert);
    clickAlert();
    incomingMessage(1);
}

function writingComms (message) {
    commsIndex = 0;
    var testInterval = setInterval(function() {writeQuestion(thisMessage.body,testInterval);},messageSpeed);
}

function writeQuestion(message,testInterval)
{
    if(commsIndex === message.length)
    {
        clearInterval(testInterval);
        writeAnswers(thisMessage);
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
        }
        commsTextBox.textContent += message[commsIndex];
        ++commsIndex;
    }
}

function writeAnswers(message)
{
    for(var i = 0; i < 4; ++i)
    {
        if(message.answers[i].answerNumber != 0)
        {
            $("#commsAnswerBox-" + message.answers[i].answerNumber).animate({ opacity: 1},700);
            var answerBox = document.getElementById("commsAnswerBox-" + (i + 1));
            answerBox.textContent = message.answers[i].body;
        }
    }
    $("#interface").css({pointerEvents : "auto"});
}