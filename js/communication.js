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
    // clickAlert();
}

var testInterval;
function writingComms (message) {
    commsIndex = 0;
    clearInterval(testInterval);
    testInterval = setInterval(writeQuestion,messageSpeed);
}

function writeQuestion()
{
    if(commsIndex === thisMessage.body.length)
    {
        clearInterval(testInterval);
        writeAnswers(thisMessage);
        return;
    }
    else
    {
        if(commsIndex % 30 === 0 && commsIndex != 0)
        {
            breakLine = true;
        }
        if(breakLine && thisMessage.body[commsIndex] === " ")
        {
            breakLine = false;
            commsTextBox.textContent = "";
        }
        commsTextBox.textContent += thisMessage.body[commsIndex];
        ++commsIndex;
    }
}

function writeAnswers(message)
{
    
    console.log(message)
    for(var i = 0; i < message.answers.length; ++i)
    {
        $("#commsAnswerBox-" + message.answers[i].answerNumber).animate({ opacity: 1},700);
        var answerBox = document.getElementById("commsAnswerBox-" + (i + 1));
        answerBox.textContent = message.answers[i].body;
    }
    $("#interface").css({pointerEvents : "auto"});
    if(message.followup){
        followup(message.followup);
        answer = null;
        answered();
    }
    $(".commsAnswerBox").click(function(){
        if(this.style.opacity > "0"){
            answer = this.id.split("-").pop();
            answered();
        }
    });
}