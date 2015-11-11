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
	this.canMove = true;
	this.allowsMining = true;
	this.elementList = [];
	this.specificRarity = [];
	this.totalRarity = 0;
	this.shop = false;
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
		getPlanetElements(tempPlanet);
		tempPlanet.movementDirection = (Math.random() < 0.5) ? 1 : -1;
		currentGalaxy.planetList.push(tempPlanet);
		var tempPlanetDiv = document.createElement('div');
		tempPlanetDiv.id = "planet-" + currentGalaxy.galaxyId + "+" + i;
		tempPlanetDiv.className = "planet";
		tempPlanet.correspondingDiv = tempPlanetDiv;
		createVisiblePlanets(tempPlanet,tempPlanetDiv);
		currentGalaxy.correspondingDiv.appendChild(tempPlanetDiv);
		currentGalaxy.planetOverlap += tempPlanet.size;
	}
	currentGalaxy.hasPlanetsYet = 1;
	var tempShop = Math.abs(Math.round(Math.random()*currentGalaxy.planetList.length) - 1);
	currentGalaxy.planetList[tempShop].shop = new Shop();
	$("#planetBoxText-" + tempShop).css({ color : "yellow"});
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

 function movePlanets(galaxy)
 {
 	var yMove;
 	var xMove;
 	for(var i = 0; i < galaxy.planetList.length; ++i)
 	{
 		if(galaxy.planetList[i].canMove)
 		{
	 		xMove = galaxy.size/2 - galaxy.planetList[i].size/2 + (galaxy.planetList[i].orbit * Math.cos(galaxy.planetList[i].movementCounter));
	 		yMove = galaxy.size/2 - galaxy.planetList[i].size/2 - galaxy.planetList[i].planetOverlap + (galaxy.planetList[i].orbit * Math.sin(galaxy.planetList[i].movementCounter));
	 		galaxy.planetList[i].yPos = yMove;
	 		galaxy.planetList[i].correspondingDiv.style.top = galaxy.planetList[i].yPos + "px";
	 		galaxy.planetList[i].xPos = xMove;
	 		galaxy.planetList[i].correspondingDiv.style.left = galaxy.planetList[i].xPos + "px";
	 		galaxy.planetList[i].movementCounter += galaxy.planetList[i].movementDirection * galaxy.planetList[i].speed;
 		}
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

function getPlanetElements(planet)
{
	var randChance;
	for(var i = 0; i < elementList.length;++i)
	{
		randChance = Math.random() * (elementList.length + 1);
		if(randChance > elementList[i].planetaryRarity)
		{
			planet.elementList.push(elementList[i]);
		} 
	}
	for(var i = 0; i < planet.elementList.length; ++i)
	{
		randChance = Math.random()/planet.elementList[i].planetaryRarity;
		planet.specificRarity.push(randChance);
		planet.totalRarity += randChance;
	}
	
	console.log(planet.elementList);
	console.log(planet.specificRarity);
	if(planet.totalRarity > 0.5)
	{
		planet.totalRarity = planet.totalRarity * 0.25;
		if(planet.totalRarity > 0.5)
		{
			planet.totalRarity = 0.5;
		}
	} 
	console.log(planet.totalRarity);
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
		var tempId = div.id.split("-").pop();
		var tempPlanet = player.currentGalaxy.planetList[tempId];
		if (tempPlanet !== player.currentPlanet)
		{
			tempPlanet.canMove = false;
			$("#player").animate({
				top: (player.currentGalaxy.yPos + (player.currentGalaxy.size/2 - tempPlanet.size/2 + (tempPlanet.orbit * Math.sin(tempPlanet.movementCounter)))) + 'px',
				left: (player.currentGalaxy.xPos + tempPlanet.xPos + tempPlanet.size/2) + 'px',
			},2000);
			if(player.currentPlanet === 0)
			{
				player.currentPlanet = tempPlanet;
			}
			else
			{
				player.currentPlanet.canMove = true;
				player.currentPlanet = tempPlanet;
			}
			if(player.currentPlanet.shop){
				incomingMessage(shopMessage);
			}
		}
		player.onAPlanet = true;
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

function findPlanetToGoTo(keyCode)
{
	var correspondingPlanet;
	switch(keyCode){
		case 49:
			correspondingPlanet = document.getElementById("planetBox-0");
			break;
		case 50:
			correspondingPlanet = document.getElementById("planetBox-1");
			break;
		case 51:
			correspondingPlanet = document.getElementById("planetBox-2");
			break;
		case 52:
			correspondingPlanet = document.getElementById("planetBox-3");
			break;
		case 53:
			correspondingPlanet = document.getElementById("planetBox-4");
			break;
		case 54:
			correspondingPlanet = document.getElementById("planetBox-5");
			break;	
		case 55:
			correspondingPlanet = document.getElementById("planetBox-6");
			break;		
		case 56:
			correspondingPlanet = document.getElementById("planetBox-7");
			break;		
		case 57:
			correspondingPlanet = document.getElementById("planetBox-8");
			break;	
		case 48:
			correspondingPlanet = document.getElementById("planetBox-9");
			break;	
		}

		goToPlanet(correspondingPlanet);
	}