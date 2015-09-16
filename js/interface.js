 function createInterface()
 {
 	createHealthBar();
 	createFuelBar();
 	createPlanetBoxes();
 }

 function createHealthBar()
 {
 	healthBar  = document.createElement('div');
    healthBar.id = "healthBar";
    healthBar.className = "healthBar";
    interface.appendChild(healthBar);
    healthBarInside  = document.createElement('div');
    healthBarInside.id = "healthBarInside";
    healthBarInside.className = "healthBarInside";
    healthBar.appendChild(healthBarInside);
    healthBarText = document.createElement('div');
    healthBarText.id = "healthBarText";
    healthBarText.className = "healthBarText";
    healthBarText.textContent = "Health: " + player.health;
    interface.appendChild(healthBarText);
 }

  function createFuelBar()
 {
 	fuelBar  = document.createElement('div');
    fuelBar.id = "fuelBar";
    fuelBar.className = "fuelBar";
    interface.appendChild(fuelBar);
    fuelBarInside  = document.createElement('div');
    fuelBarInside.id = "fuelBarInside";
    fuelBarInside.className = "fuelBarInside";
    fuelBar.appendChild(fuelBarInside);
    fuelBarText = document.createElement('div');
    fuelBarText.id = "fuelBarText";
    fuelBarText.className = "fuelBarText";
    fuelBarText.textContent = "Fuel: " + player.fuel;
    interface.appendChild(fuelBarText);
 }

 function createPlanetBoxes()
 {
 	for (var i = 0; i < 10; ++i)
 	{
 		var planetBox  = document.createElement('div');
	    planetBox.id = "planetBox-" + i;
	    planetBox.className = "planetBox";
	    planetBox.style.left = 98*i + "px";
	    interface.appendChild(planetBox);
	    planetBoxList.push(planetBox);
 		var planetBoxText  = document.createElement('div');
	    planetBoxText.id = "planetBoxText-" + i;
	    planetBoxText.className = "planetBoxText";
	    planetBoxText.style.left = 98*i + "px";
	    planetBoxText.style.top = "70px";
	    interface.appendChild(planetBoxText);
	    planetBoxTextList.push(planetBoxText);
 		var planetBoxIcon  = document.createElement('div');
	    planetBoxIcon.id = "planetBoxIcon-" + i;
	    planetBoxIcon.className = "planetBoxIcon";
	    interface.appendChild(planetBoxIcon);
	    planetBoxIconList.push(planetBoxIcon);
 	}
 	planetClick();
 }

 function changeHealth(amount)
{
    player.health = player.health + amount;
    if (player.health < 0)
    {
        player.health = 0;
    }
    $("#healthBarInside").animate({width: (player.health/player.maxHealth)*100 + "px"},2000);
    if (amount < 0)
    {
        nIntervId = setInterval(function() {changeBar("health",-1);}, 2000/Math.abs(amount));
    }
    else
    {
        nIntervId = setInterval(function() {changeBar("health",1);}, 2000/Math.abs(amount));
    }
}

function setHealth(amount)
{
    changeHealth(amount - player.health);
}

function changeFuel(amount)
{
    player.fuel = player.fuel + amount;
    if (player.fuel < 0)
    {
        player.fuel = 0;
    }
    $("#fuelBarInside").animate({width: (player.fuel/player.maxFuel)*100 + "px"},2000);
    if (amount < 0)
    {
        nIntervId = setInterval(function() {changeBar("fuel",-1);}, 2000/Math.abs(amount));
    }
    else
    {
        nIntervId = setInterval(function() {changeBar("fuel",1);}, 2000/Math.abs(amount));
    }
}

function setFuel(amount)
{
    changeFuel(amount - player.fuel);
}

function changeBar(type,amount)
{
    if (type === "health")
    {
        var tempHealth = parseInt(healthBarText.textContent.split(" ").pop());
        if(tempHealth !== player.health)
        {
            healthBarText.textContent = "Health: " + (tempHealth + amount);
        }
        else
        {
            clearInterval(nIntervId);
        }
    }
    else if (type === "fuel")
    {
        var tempFuel = parseInt(fuelBarText.textContent.split(" ").pop());
        if(tempFuel !== player.fuel)
        {
            fuelBarText.textContent = "Fuel: " + (tempFuel + amount);
        }
        else
        {
            clearInterval(nIntervId);
        }
    }
}

function addPlanetBoxes()
{
	for (var i = 0; i < player.currentGalaxy.planetList.length; ++i)
	{
		$("#" + planetBoxList[i].id).animate({opacity : 1},2000);
		$("#" + planetBoxTextList[i].id).animate({opacity : 1},2000);
		$("#" + planetBoxIconList[i].id).animate({opacity : 1},2000);
		planetBoxList[i].style.backgroundColor = "black";
		planetBoxIconList[i].style.width = player.currentGalaxy.planetList[i].size*20 + "px";
		planetBoxIconList[i].style.height = player.currentGalaxy.planetList[i].size*20 + "px";
		planetBoxIconList[i].style.backgroundColor = "" + player.currentGalaxy.planetList[i].color;
		planetBoxIconList[i].style.left = (49 + 98*i - player.currentGalaxy.planetList[i].size*10) + "px";
		planetBoxIconList[i].style.top = (40 - player.currentGalaxy.planetList[i].size*10) + "px";
		planetBoxTextList[i].textContent = "Planet " + (i + 1);
	}
}


