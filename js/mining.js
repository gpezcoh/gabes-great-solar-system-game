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
	var tempNum = getTempWholeNum(10,1) - 1;
	var testElement = elementList[tempNum];
	console.log(tempNum)
	if(testMining < 0.5)
	{
		if(player.firstOpenSpace <= player.inventorySpaces)
		{
			foundSomething(testElement,resultText);
		}
		else
		{
			resultText.textContent = "You found " + testElement.name + ", but don't have room for it :(";
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
		$("#loadBarInside").animate({width: "0px"},10);
		window.setTimeout(function(){resetLoadBar("end")},1000);
	}
}

function foundSomething(element,resultText)
{
    ++element.amount;
	if(element.amount === 1)
	{
		var cell = document.getElementById("inventorySpot-" + player.firstOpenSpace)
	    var elementDiv = cell.appendChild(document.createElement('img'));
	    elementDiv.className = "element";
	    elementDiv.src = "elements/" + element.name + ".svg";
	    ++player.firstOpenSpace;
	    player.elementList.push(element);
	    var elementName = cell.appendChild(document.createElement('div'));
	    elementName.id = "" + element.name;
    	elementName.className = "elementName";
    	elementName.textContent = "" + element.name + " x" + element.amount;
	}
	else
	{
		var elementName = document.getElementById("" + element.name);
    	elementName.textContent = "" + element.name + " x" + element.amount;
	}
    resultText.textContent = "You found " + element.name + "!";
}