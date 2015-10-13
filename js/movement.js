function allowMovement()
{
	$(".galaxy").click(function () {
	var oldGalaxy = player.currentGalaxy;
	var tempGalaxy = galaxyList[this.id.split("-").pop()];
	if(tempGalaxy.neighbors.indexOf(player.currentGalaxy) !== -1)
	{ 
		var tempEdge;
		for(var i = 0; i < oldGalaxy.edges.length; ++i)
		{
			if(oldGalaxy.edges[i].includedGalaxies.indexOf(oldGalaxy) !== -1 && 
				oldGalaxy.edges[i].includedGalaxies.indexOf(tempGalaxy) !== -1)
			{
				tempEdge = oldGalaxy.edges[i];
			}
		}
		if (tempEdge.length <= player.fuel)
		{
		    $(this).addClass("visited");
			$('#' + tempEdge.correspondingDiv.id).animate({opacity: 0.5},2000);
			tempEdge.correspondingDiv.textContent = "" + Math.round(tempEdge.length);
			changeFuel(Math.round((tempEdge.length) * -1));
			player.currentGalaxy = tempGalaxy;
			player.visibleEdges.push(tempEdge);
			// rotateSomething(playerDiv,tempEdge.angle);
			var yMove = setPlayerCoordinates(tempGalaxy,"top");
			var xMove = setPlayerCoordinates(tempGalaxy,"left");
			$("#player").animate({
				top: yMove + 'px',
				left: xMove + 'px',
			},2000);
			// movePlayer(this)
			moveCameraAround(tempGalaxy,2000);
			setVisibleGalaxies();
		}
		else
		{
			alert("Not Enough Fuel");
		}
	}
	else
	{
		alert("Too far away");
	}
	});
}


 function enterSolarSystem()
 {
 	if(player.currentGalaxy.hasPlanetsYet === 0)
 	{
 		createPlanets(player.currentGalaxy);
 	}
 	galaxyView = 1;
 	adjustForZoom();
 	addPlanetBoxes();
 	$("#interface").css({pointerEvents : "auto"});
 	zoomIn(1000,player.currentGalaxy,2000);
 	incomingMessage(1);
 }

 function adjustForZoom()
 {
 	$("#" + playerDiv.id).animate({width: "2px", height: "2px", left: (player.currentGalaxy.xPos + player.currentGalaxy.size/2) + "px", top: (player.currentGalaxy.yPos + player.currentGalaxy.size/2) + "px"},2000);
 	for (var i = 0; i < player.currentGalaxy.neighbors.length; ++i)
 	{
 		$("#galaxy-" + player.currentGalaxy.neighbors[i].galaxyId).animate({opacity : 0},500);
 	}
 	// $(".galaxy").animate({opacity: 0},500);
 	$(".edge").animate({opacity: 0},500);
 	player.currentGalaxy.correspondingDiv.style.backgroundColor = player.currentGalaxy.realColor;
 	$(".planet").animate({opacity: 1},1000);
 	$(".planetLabel").animate({opacity: 0.5},1000);
 	player.currentGalaxy.planetInterval = setInterval(function() {movePlanets(player.currentGalaxy);},50);
 }

 function exitSolarSystem()
 {
 	galaxyView = 0;
 	adjustBackForZoom();
 	$(".planetBox").animate({opacity: 0},1000);
 	$(".planetBoxText").animate({opacity: 0},1000);
 	$(".planetBoxIcon").animate({opacity: 0},1000);
 	$("#interface").css({pointerEvents : "none"});
 	zoomIn(300,player.currentGalaxy,2000);
 	player.onAPlanet = false;
 	player.currentPlanet.canMove = true;
 	player.currentPlanet = 0;
 }

function adjustBackForZoom()
 {
 	$("#" + playerDiv.id).animate({borderBottomWidth: "5px", borderLeftWidth: "1px", borderRightWidth: "1px", left: setPlayerCoordinates(player.currentGalaxy,"left") + "px", top: setPlayerCoordinates(player.currentGalaxy,"top") +  "px"},2000);
 	findVisibleGalaxies();
 	findVisibleEdges();
 	$(".planet").animate({opacity: 0},1000);
 	$(".planetLabel").animate({opacity: 0},1000);
 	clearInterval(player.currentGalaxy.planetInterval);
 }

