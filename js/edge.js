function Edge(length, edgeId, xCenter, yCenter, angle)
  {
  	this.includedGalaxies = [];
  	this.length = length;
  	this.edgeId = edgeId;
  	this.xCenter = xCenter;
  	this.yCenter = yCenter;
    this.angle = angle;
    this.correspondingDiv = 0;
  }

  function drawLines(startGalaxy,endGalaxy)
  {
//   jsPlumb.connect({
//   source:"element1", 
//   target:"element2",
//   anchors:["Right", "Left" ],
//   endpoint:"Rectangle",
//   endpointStyle:{ fillStyle: "yellow" }
// });
    var x1 = startGalaxy.xPos + startGalaxy.size/2;
    var x2 = endGalaxy.xPos + endGalaxy.size/2;
    var y1 = startGalaxy.yPos + startGalaxy.size/2;
    var y2 = endGalaxy.yPos + endGalaxy.size/2;
    var a = x1 - x2;
    var b = y1 - y2;
    var thickness = 1;
    var length = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2);
    var angle = Math.atan2(b,a)*(180/Math.PI);
    var tempEdgeId = "edge-" + startGalaxy.galaxyId + "-" + endGalaxy.galaxyId;
    var tempEdge = new Edge(length,tempEdgeId, cx, cy, angle);
    tempEdge.includedGalaxies.push(startGalaxy,endGalaxy);
    startGalaxy.edges.push(tempEdge);
    endGalaxy.edges.push(tempEdge);
    var tempEdgeDiv = document.createElement('div');
    tempEdgeDiv.id = tempEdgeId;
    tempEdgeDiv.className = "edge";
    startGalaxy.edgeDivs.push(tempEdgeDiv);
    endGalaxy.edgeDivs.push(tempEdgeDiv);
    tempEdge.correspondingDiv = tempEdgeDiv;
    createVisibleEdge(tempEdge, tempEdgeDiv, angle, thickness);
    universe.appendChild(tempEdgeDiv);
  }

  function createVisibleEdge(edge, edgeDiv, angle, thickness)
  {
    edgeDiv.style.height = thickness + 'px';
    edgeDiv.style.lineHeight = thickness + 'px';
    edgeDiv.style.width = edge.length + 'px';
    edgeDiv.style.left = edge.xCenter + 'px';
    edgeDiv.style.top = edge.yCenter + 'px';
    if (90 < angle && angle < 270)
    {
      rotateSomething(edgeDiv, angle - 180);
    }
    else if(-90 > angle && angle > -270)
    {
      rotateSomething(edgeDiv, angle + 180);
    }
    else
    {
      rotateSomething(edgeDiv,angle)
    }
    // edgeDiv.style.opacity = 0.5;
  }

  function findVisibleEdges()
  {
    for(var i = 0; i < player.visibleEdges.length; ++i)
    {
      $('#' + player.visibleEdges[i].correspondingDiv.id).animate({opacity: 0.5},2000);
    }
  }