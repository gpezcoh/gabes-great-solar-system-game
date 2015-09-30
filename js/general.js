var galaxyList = [];
// var galaxyDivlist = [];
var edgelist = [];
var edgeDivList = [];
var universe = document.getElementById('universe');
var player;
var playerDiv;
var zoom;
var scale;
var zoomedIn;
var healthBar;
var fuelBar;
var healthBarInside;
var healthBarText;
var nIntervId;
var galaxyView = 0;
var planetBoxList = [];
var planetBoxTextList = [];
var planetBoxIconList = [];
var inventory;
var shipEquipment;
var equipmentPointer;
var comms;
var commsTextBox;
var commsIndex;
var breakLine;

$(document).ready(function(){
      console.log('hello');
      document.addEventListener('keydown', keyPresses);
      createGalaxies(100);
      createPlayer();
      createInterface();
      allowMovement();
  });

 // $('#play').click(function(){
 //    socket.emit('play');
 //  });
 //  socket.on('play', function(){

 //  }

  
  

  function rotateSomething(thingToRotate, angle)
  {
    thingToRotate.style.webkitTransform = 'rotate(' + angle + 'deg)';
    thingToRotate.style.mozTransform = 'rotate(' + angle + 'deg)';
    thingToRotate.style.oTransform = 'rotate(' + angle + 'deg)';
    thingToRotate.style.msTransform = 'rotate(' + angle + 'deg)';
    thingToRotate.style.transform = 'rotate(' + angle + 'deg)';
  }

function randomStartingPoint(player,playerDiv)
{
  var startGalaxy = Math.round(Math.random() * (galaxyList.length - 1))
  if(galaxyList[startGalaxy].neighbors.length > 2)
  {
   return galaxyList[startGalaxy];
  }
  else
  {
    return randomStartingPoint(player,playerDiv);
  }
}

function getTempNum(maxLimit, minLimit)
{
  var tempSize = Math.random() * maxLimit;
  if (tempSize < minLimit)
  {
    tempSize = minLimit;
  }
  return tempSize;
}

function getTempWholeNum(maxLimit, minLimit)
{
  var tempSize = Math.round(Math.random() * maxLimit);
  if (tempSize < minLimit)
  {
    tempSize = minLimit;
  }
  if (tempSize > maxLimit)
  {
    tempSize = maxLimit;
  }
  return tempSize;
}

function getTempPos(type)
{
  var randPos = 0;
  if (type === 0)
  {
    randPos = Math.random() * document.body.clientWidth;
  }
  else
  {
    randPos = Math.random() * getDocHeight();
  }
  return randPos;
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
