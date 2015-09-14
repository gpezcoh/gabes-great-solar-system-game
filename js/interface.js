
 function createInterface()
 {
 	createHealthBar();
 	createFuelBar();
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