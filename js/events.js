
function keyPresses(event)
{
  if(event.keyCode === 90 && galaxyView === 0) 
  {
    document.removeEventListener('keydown', keyPresses);
    if (zoomedIn === 1)
    {
      zoomOut(100, 2000);
      zoomedIn = 0;
    }
    else if (zoomedIn === 0)
    {
       zoomIn(300,player.currentGalaxy, 2000);
       zoomedIn = 1;
    }
    window.setTimeout(resetEventListener,2000);
  }
  else if(event.keyCode === 65)
  {
    changeHealth(-10);
  }
  else if(event.keyCode === 83)
  {
    setHealth(100);
  }
  // else if(event.keyCode === 81)
  // {
  //  changeFuel(-10);
  // }
  else if(event.keyCode === 87)
  {
    setFuel(1000);
  }
  else if(event.keyCode === 69)
  {
    // document.removeEventListener('keydown', keyPresses);
    if(galaxyView === 0)
    {
      enterSolarSystem();
    }
    else
    {
      exitSolarSystem();
    }
    // window.setTimeout(resetEventListener,2000);
  }
  else if(event.keyCode === 73)
  {
    toggleInventory();
  }
  else if(event.keyCode === 77 && player.onAPlanet)
  {
    document.removeEventListener('keydown', keyPresses);
    mine(player.currentPlanet);
    window.setTimeout(resetEventListener,10000);
  }
  else if (event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51 ||
    event.keyCode === 52 || event.keyCode === 53 || event.keyCode === 54 ||
    event.keyCode === 55 || event.keyCode === 56 || event.keyCode === 57 || 
    event.keyCode === 48)
  {
    findPlanetToGoTo(event.keyCode);
  }
}

function resetEventListener()
{
  document.addEventListener('keydown', keyPresses);
}

function moveCameraAround(startingGalaxy, speed)
  {
    var xMove = (-1*startingGalaxy.xPos + document.body.clientWidth/scale);
    var yMove = (-1*startingGalaxy.yPos + getDocHeight()/scale);
    $("#universe").animate({left: xMove + 'px', top: yMove + 'px'}, speed);
  }

  function zoomIn(localZoom, startingGalaxy, speed)
  {
    var xMove = (-1*startingGalaxy.xPos + document.body.clientWidth/(localZoom/50));
    var yMove = (-1*startingGalaxy.yPos + getDocHeight()/(localZoom/50));
    $("#universe").animate({zoom: localZoom + '%' , left: xMove + 'px', top: yMove + 'px'}, speed);
  }

  function zoomOut(localZoom, speed)
  {
    $("#universe").animate({zoom: localZoom + '%' , left: 0 + 'px', top: 0 + 'px'}, speed);
  }