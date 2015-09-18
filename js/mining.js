function mine(planet)
{
	if(planet.allowsMining)
	{
		var resultText = document.getElementById("loadBarResults");
		var i = 0;
		resetLoadBar("start");
		minePlanet(planet, i,resultText);
	}
	else
	{
		//PUT STUFF HERE LATER
	}
}

function resetLoadBar(type)
{
	if(type === "start")
	{
		$("#loadBar").css({display: "inline"});
		$("#loadBarInside").css({width: "0px"});
 		$("#loadBarText").css({display: "inline"});
 		$("#loadBarResults").css({display: "inline"});
	}
	else if (type === "end")
	{
		$("#loadBar").css({display: "none"});
 		$("#loadBarText").css({display: "none"});
 		$("#loadBarResults").css({display: "none"});
	}
}

function minePlanet(planet, index,resultText)
{
	var testMining = Math.random();
	$("#loadBarInside").animate({width: "+=40px"},1000);
	if(testMining < 0.5)
	{
		if(player.firstOpenSpace <= player.inventorySpaces)
		{
			foundSomething(Scoydian,resultText);
		}
		else
		{
			resultText.textContent = "You found " + Scoydian.name + ", but don't have room for it :(";
		}
	}
	else
	{
		resultText.textContent = "You found nothing :(";
	}
	++index;
	if (index < 10)
	{
		window.setTimeout(function(){minePlanet(planet,index,resultText)},1000);
	}
	else
	{
		$("#loadBarInside").animate({width: "+=40px"},1000);
		window.setTimeout(function(){resetLoadBar("end")},1000);
	}
}

function foundSomething(mineral,resultText)
{

	var cell = document.getElementById("inventorySpot-" + player.firstOpenSpace)
    var mineralDiv = cell.appendChild(document.createElement('img'));
    mineralDiv.className = "element";
    mineralDiv.src = "elements/Scoydian.svg";
    ++player.firstOpenSpace;
    player.elementList.push(mineral);
    resultText.textContent = "You found " + mineral.name + "!";
}