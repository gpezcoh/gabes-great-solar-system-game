function Player()
{
    this.currentGalaxy = 0;
    this.size = 0;
    this.divGalaxy = 0;
    this.visibleGalaxies = [];
    this.fuel = 1000;
    this.maxFuel = 1000;
    this.health = 100;
    this.maxHealth = 100;
    this.maxDistance = 100;
    this.visibleEdges = [];
    this.currentPlanet = 0;
    this.inventorySpaces = 16;
    this.firstOpenSpace = 1;
    this.elementList = [];
    this.onAPlanet = false;
    this.equipment = [];
}

function createPlayer()
{
    player = new Player();
    playerDiv = document.createElement('div');
    playerDiv.id = "player";
    playerDiv.className = "player";
    var startingGalaxy = randomStartingPoint(player,playerDiv);
    player.currentGalaxy = startingGalaxy;
    player.visibleGalaxies.push(player.currentGalaxy);
    player.size = 5;
    leftOffset = player.size/5;
    topOffset = player.size/2;
    playerDiv.style.left = setPlayerCoordinates(startingGalaxy, "left") + "px";
    playerDiv.style.top = setPlayerCoordinates(startingGalaxy, "top") + "px";
    playerDiv.style.borderBottom = "solid " + player.size + "px red";
    playerDiv.style.borderLeft = "solid " + player.size/5 + "px transparent";
    playerDiv.style.borderRight = "solid " + player.size/5 + "px transparent";
    player.divGalaxy = galaxyList[startingGalaxy.galaxyId].correspondingDiv;
    $(player.divGalaxy).addClass("visited");
    universe.appendChild(playerDiv);
    // rotateSomething(playerDiv,-90);
    zoom = 300;
    scale = zoom/50;
    var xMove = (-1*startingGalaxy.xPos + document.body.clientWidth/scale);
    var yMove = (-1*startingGalaxy.yPos + getDocHeight()/scale);
    $("#universe").animate({zoom: zoom + '%' , left: xMove + 'px', top: yMove + 'px'}, 2000);
    zoomedIn = 1;
    setVisibleGalaxies();
}

function setPlayerCoordinates(startingGalaxy, direction)
{
    if (direction === "left")
    {
      return startingGalaxy.xPos + startingGalaxy.size/2 - leftOffset;
    }
    else if (direction === "top")
    {
      return startingGalaxy.yPos + startingGalaxy.size/2 - topOffset;
    }
}

