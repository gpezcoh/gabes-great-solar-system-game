function Galaxy(size, color, xPos, yPos, galaxyId)
  {
    this.size = size;
    this.color = color;
    this.xPos = xPos;
    this.yPos = yPos;
    this.galaxyId = galaxyId;
    this.neighbors = [];
    this.edges = [];
    this.edgeDivs = [];
    this.correspondingDiv = 0;
    this.planetList = [];
    this.hasPlanetsYet = 0;
    this.temperature = 0;
    this.realColor = "";
    this.planetOverlap =  0;
    this.planetInterval = 0;
  }


function setVisibleGalaxies()
  {
    for(var i = 0; i < player.currentGalaxy.neighbors.length; ++i)
    {
      if(player.visibleGalaxies.indexOf(player.currentGalaxy.neighbors[i]) === -1)
      {
        player.visibleGalaxies.push(player.currentGalaxy.neighbors[i]);
      }
    }
    findVisibleGalaxies();
  }

function findVisibleGalaxies()
{
   for(var i = 0; i < player.visibleGalaxies.length; ++i)
    {
      $('#galaxy-' + player.visibleGalaxies[i].galaxyId).animate({opacity: 1},2000);
    }
    $('#galaxy-' + player.currentGalaxy.galaxyId).animate({opacity: 1},2000);
}
 
  function createGalaxies(number)
  {
  	var tempX = 0;
  	var tempY = 0;
  	var tempSize = 0;
  	var tempColor = 0;
  	// var tempNeighbors = [];
  	for (var i = 0; i < number; ++i)
  	{
  		tempX = getTempPos(0);
  		tempY = getTempPos(1);
  		tempSize = getTempNum(12,4);
  		// tempColor = getTempColor();
  		createGalaxy(tempSize,tempColor,tempX,tempY,i);
  	}
  	for (var i = 0; i < galaxyList.length; ++i)
  	{
  		getNeighbors(galaxyList,i);
  		for (var j = 0; j < galaxyList[i].neighbors.length; ++j)
  		{
        var checkExistingEdge = document.getElementById("edge-" + galaxyList[i].neighbors[j].galaxyId + "-" + galaxyList[i].galaxyId);
        if (!checkExistingEdge)
        {
  			   drawLines(galaxyList[i],galaxyList[i].neighbors[j]);
        }
  		}
  	}
  }

  function getNeighbors(galaxyList, index)
  {
    for (var j = 0; j < galaxyList.length; ++j)
      {
        if(Math.sqrt(Math.pow((galaxyList[index].xPos - galaxyList[j].xPos),2) + 
            Math.pow((galaxyList[index].yPos - galaxyList[j].yPos),2)) < 100)
        {
          if (galaxyList[index] !== galaxyList[j])
          {
            galaxyList[index].neighbors.push(galaxyList[j]);
          }
        }
      }
  }

function createGalaxy(size,color,xPos,yPos,index)
{
  var thisGalaxy = new Galaxy(size,color,xPos,yPos,index);
  thisGalaxy.temperature = getTempNum(10000,2000);
  thisGalaxy.realColor = getColorFromTemp(thisGalaxy.temperature);
  galaxyList.push(thisGalaxy);
  tempGalaxy = document.createElement('div');
  tempGalaxy.id = "galaxy-" + galaxyList[index].galaxyId;
  tempGalaxy.className = "galaxy";
  // tempGalaxy.setAttribute("onclick", "moveToGalaxy()");
  // galaxyDivlist.push(tempGalaxy);
  thisGalaxy.correspondingDiv = tempGalaxy;
  createVisibleGalaxy(galaxyList[index],galaxyList[index].correspondingDiv);
  universe.appendChild(tempGalaxy);
}

function createVisibleGalaxy(galaxy, divGalaxy)
{
  // console.log(galaxy);
  divGalaxy.style.left = galaxy.xPos + 'px';
  divGalaxy.style.top = galaxy.yPos + 'px';
  divGalaxy.style.width = galaxy.size + 'px';
  divGalaxy.style.height = galaxy.size + 'px';
  // divGalaxy.style.background = galaxy.color;
}

function getColorFromTemp(temp)
{
  if(temp < 4000)
  {
    return "#FA5858";
  }
  else if(temp < 6000)
  {
    return "#FAAC58";
  }
  else if (temp < 8000)
  {
    return "#F7FE2E";
  }
  else
  {
    return "#A9F5F2";
  }
}





