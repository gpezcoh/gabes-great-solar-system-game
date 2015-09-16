function Planet(size, orbit)
{
	this.size = size;
	this.correspondingDiv;
	this.orbit = orbit;
	this.galaxy;
	this.xPos;
	this.yPos;
	this.planetOverlap;
	this.movementCounter;
	this.movementDirection;
	this.speed;
	this.color;
	// this.label;
	this.planetBox;
	this.planetBoxText;
}

function createPlanets(currentGalaxy)
{
	var numberOfPlanets = getTempNum(10,2);
	for(var i = 0; i < numberOfPlanets; ++i)
	{
		var sizeOfPlanets = getTempNum(2,0.2);
		var orbitOfPlanets = getTempNum(30,currentGalaxy.size);
		var tempPlanet = new Planet(sizeOfPlanets,orbitOfPlanets);
		tempPlanet.galaxy = currentGalaxy;
		tempPlanet.planetOverlap = currentGalaxy.planetOverlap;
		tempPlanet.movementCounter = Math.round(getTempNum(100,1)) * 0.05;
		tempPlanet.speed = getTempNum(0.05,0.01);
		tempPlanet.color = getPlanetColor();
		tempPlanet.movementDirection = (Math.random() < 0.5) ? 1 : -1;
		currentGalaxy.planetList.push(tempPlanet);
		var tempPlanetDiv = document.createElement('div');
		tempPlanetDiv.id = "planet-" + currentGalaxy.galaxyId + "-" + i;
		tempPlanetDiv.className = "planet";
		tempPlanet.correspondingDiv = tempPlanetDiv;
		createVisiblePlanets(tempPlanet,tempPlanetDiv);
		currentGalaxy.correspondingDiv.appendChild(tempPlanetDiv);
		currentGalaxy.planetOverlap += tempPlanet.size;
		// var tempPlanetLabel = document.createElement('div');
		// tempPlanetLabel.className = "planetLabel";
		// tempPlanetLabel.textContent = "planet " + (i + 1);
		// tempPlanetLabel.id = "planet " + (i + 1);
		// tempPlanet.label = tempPlanetLabel;
		// planetLabelPosition(tempPlanet);
		// currentGalaxy.correspondingDiv.appendChild(tempPlanetLabel);
	}
	currentGalaxy.hasPlanetsYet = 1;
}

function createVisiblePlanets(planet,planetDiv)
{
	planetDiv.style.width = planet.size + "px";
	planetDiv.style.height = planet.size + "px";
	planetDiv.style.backgroundColor = planet.color;
	randomPlanetStart(planet,planetDiv);
}

function randomPlanetStart(planet,planetDiv)
{
	planet.xPos = planet.galaxy.size/2 - planet.size/2 + planet.orbit;
	planet.yPos = planet.galaxy.size/2 - planet.size/2 - player.currentGalaxy.planetOverlap;
	planetDiv.style.top = planet.yPos + "px";
	planetDiv.style.left = planet.xPos + "px";
}

// function planetLabelPosition(planet)
// {
// 	var labelXPos = planet.galaxy.size/2 - planet.size/2 + planet.orbit;
// 	var labelYPos = planet.galaxy.size/2 - planet.size/2 - player.currentGalaxy.planetOverlap*2;
// 	planet.label.style.top = labelYPos + "px";
// 	planet.label.style.left = labelXPos + "px";
// }
 
 function movePlanets(galaxy)
 {
 	var yMove;
 	var xMove;
 	for(var i = 0; i < galaxy.planetList.length; ++i)
 	{
 		xMove = galaxy.size/2 - galaxy.planetList[i].size/2 + (galaxy.planetList[i].orbit * Math.cos(galaxy.planetList[i].movementCounter));
 		yMove = galaxy.size/2 - galaxy.planetList[i].size/2 - galaxy.planetList[i].planetOverlap + (galaxy.planetList[i].orbit * Math.sin(galaxy.planetList[i].movementCounter));
 		galaxy.planetList[i].yPos = yMove;
 		galaxy.planetList[i].correspondingDiv.style.top = galaxy.planetList[i].yPos + "px";
 		galaxy.planetList[i].xPos = xMove;
 		galaxy.planetList[i].correspondingDiv.style.left = galaxy.planetList[i].xPos + "px";
 		// galaxy.planetList[i].label.style.top = yMove + "px";
 		// galaxy.planetList[i].label.style.left = xMove + "px";
 		galaxy.planetList[i].movementCounter += galaxy.planetList[i].movementDirection * galaxy.planetList[i].speed;
 	}
 }

 function getPlanetColor()
{
	var colorChooser = Math.round(Math.random() * 9);
	switch(colorChooser){
		case 0:
			return "#01DF01";
		case 1:
			return "#0080FF";
		case 2:
			return "#3A01DF";
		case 3:
			return "#CC2EFA";
		case 4:
			return "#FF0000";
		case 5:
			return "#BDBDBD";
		case 6:
			return "#FE9A2E";
		case 7:
			return "#D7DF01";
		case 8:
			return "#088A68";
		case 9:
			return "#4B088A";								
	}
}

function planetClick()
{
	$(".planetBox").click(function () {
		goToPlanet(this);
	});
	$(".planetBoxText").click(function () {
		goToPlanet(this);
	});
	$(".planetBoxIcon").click(function () {
		goToPlanet(this);
	});
	$(".planetBox").hover(function () {
		highlightBox(this,5);
	},function () {
		highlightBox(this,2);
		}
	);
	$(".planetBoxText").hover(function () {
		highlightBox(this,5);
	},function () {
		highlightBox(this,2);
		}
	);
	$(".planetBoxIcon").hover(function () {
		highlightBox(this,5);
	},function () {
		highlightBox(this,2);
		}
	);
}

function goToPlanet(div)
{
	if(div.style.opacity != 0)
	{

	}
}

function highlightBox(div,amount)
{
	if(div.style.opacity != 0)
		{
			var tempId = div.id.split("-").pop();
			var tempBox = document.getElementById("planetBox-" + tempId);
			var tempText = document.getElementById("planetBoxText-" + tempId);
			tempBox.style.borderWidth = amount + "px";
			if(tempText.style.fontWeight === "bold")
			{
				tempText.style.fontWeight = "normal";
			}
			else
			{
				tempText.style.fontWeight = "bold";
			}

		}
}
