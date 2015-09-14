function Planet(size, orbit)
{
	this.size = size;
	this.correspondingDiv = 0;
	this.orbit = orbit;
	this.galaxy = 0;
	this.xPos = 0;
	this.yPos = 0;
	this.planetOverlap = 0;
	this.movementCounter = 0;
	this.movementDirection = 0;
	this.speed = 0
	this.color = "";
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
		var tempPlanetLabel = document.createElement('div');
		tempPlanetLabel.className = "planetLabel";
		tempPlanetLabel.textContent = "hello";
		tempPlanetLabel.style.marginTop = "-10px";
		tempPlanet.correspondingDiv.appendChild(tempPlanetLabel);
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
	var randChance = Math.random()
	planet.xPos = planet.galaxy.size/2 - planet.size/2 + planet.orbit;
	planet.yPos = planet.galaxy.size/2 - planet.size/2 - player.currentGalaxy.planetOverlap;
	planetDiv.style.top = planet.yPos + "px";
	planetDiv.style.left = planet.xPos + "px";
}
 
 function movePlanets(galaxy)
 {
 	var yMove;
 	var xMove;
 	for(var i = 0; i < galaxy.planetList.length; ++i)
 	{
 		xMove = galaxy.size/2 - galaxy.planetList[i].size/2 + (galaxy.planetList[i].orbit * Math.cos(galaxy.planetList[i].movementCounter));
 		yMove = galaxy.size/2 - galaxy.planetList[i].size/2 - galaxy.planetList[i].planetOverlap + (galaxy.planetList[i].orbit * Math.sin(galaxy.planetList[i].movementCounter));
 		galaxy.planetList[i].yPos =yMove;
 		galaxy.planetList[i].correspondingDiv.style.top = galaxy.planetList[i].yPos + "px";
 		galaxy.planetList[i].xPos =xMove;
 		galaxy.planetList[i].correspondingDiv.style.left = galaxy.planetList[i].xPos + "px";
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





