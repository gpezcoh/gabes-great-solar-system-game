var playerHull = new equipment(0,"Cheap Hull",1);
var playerEngine = new equipment(1,"Cheap Engine",1);
var playerDrill = new equipment(2,"Cheap Drill",2);
var playerFuelTank = new equipment(3,"Small Fuel Tank",1);
var playerLanguageTranslator = new equipment(4,"Cheap Language Translator",1);
var playerCargoBay = new equipment(5,"Small Cargo Bay",1);

function equipment(type, name, level)
{
	switch(type){
		case 0:
			this.name = name;
			this.health = 100*level;
			break;
		case 1:
			this.name = name;
			this.range = 100*level;
			break;
		case 2:
			this.name = name;
			this.depth = 100*level;
			this.durability = 100*level;
			break;
		case 3:
			this.name = name;
			this.capacity = 1000*level;
			break;
		case 4:
			this.name = name;
			this.complexity = level;
			break;
		case 5:
			this.name = name;
			this.storage = 160*level;
			break;	
			}				
}

function equipmentClick()
{
	// $(".shipEquipmentPiece").click(function () {
	// 	goToPlanet(this);
	// });
	$(".shipEquipmentPiece").hover(function () {
		highlightEquipmentBox(this,5);
	},function () {
		highlightEquipmentBox(this,2);
		}
	);
}

function highlightEquipmentBox(div,amount)
{
	if(div.style.display != "none")
		{
			var tempId = div.id.split("-").pop();
			var tempBox = document.getElementById("shipEquipmentSpot-" + tempId);
			tempBox.style.borderWidth = amount + "px";
			if(equipmentPointer.style.display != "inline")
			{
				equipmentPointer.style.display = "inline";
				equipmentPointer.style.top = -10 + (tempId * 100) + "px";
				equipmentPointer.style.display = "inline";
				equipmentPointer.textContent = player.equipment[tempId-1].name;
			}
			else
			{
				equipmentPointer.style.display = "none";
			}
		}
}

function addEquipment()
{
	var firstBox = document.getElementById("shipEquipmentSpot-1")
    var hullBox = document.createElement('img');
    hullBox.id = "hullBox";
    hullBox.src = "spaceships/spaceship.svg";
    hullBox.className = 'hullBox';
    hullBox.style.width = "90px";
    hullBox.style.height = "90px";
    firstBox.appendChild(hullBox);
    var secondBox = document.getElementById("shipEquipmentSpot-2")
    var engineBox = document.createElement('img');
    engineBox.id = "engineBox";
    engineBox.src = "equipment/cheap engine.svg";
    engineBox.className = 'engineBox';
    engineBox.style.width = "90px";
    engineBox.style.height = "90px";
    secondBox.appendChild(engineBox);
    var thirdBox = document.getElementById("shipEquipmentSpot-3")
    var drillBox = document.createElement('img');
    drillBox.id = "drillBox";
    drillBox.src = "equipment/cheap drill.svg";
    drillBox.className = 'drillBox';
    drillBox.style.width = "90px";
    drillBox.style.height = "90px";
    thirdBox.appendChild(drillBox);
    var fourthBox = document.getElementById("shipEquipmentSpot-4")
    var fuelTankBox = document.createElement('img');
    fuelTankBox.id = "fuelTankBox";
    fuelTankBox.src = "equipment/small fuel tank.svg";
    fuelTankBox.className = 'fuelTankBox';
    fuelTankBox.style.width = "90px";
    fuelTankBox.style.height = "90px";
    fourthBox.appendChild(fuelTankBox);
    var fifthBox = document.getElementById("shipEquipmentSpot-5")
    var translatorBox = document.createElement('img');
    translatorBox.id = "translatorBox";
    translatorBox.src = "equipment/cheap translator.svg";
    translatorBox.className = 'translatorBox';
    translatorBox.style.width = "90px";
    translatorBox.style.height = "90px";
    fifthBox.appendChild(translatorBox);
    var sixthBox = document.getElementById("shipEquipmentSpot-6")
    var cargoBayBox = document.createElement('img');
    cargoBayBox.id = "cargoBayBox";
    cargoBayBox.src = "equipment/small cargo bay.svg";
    cargoBayBox.className = 'cargoBayBox';
    cargoBayBox.style.width = "90px";
    cargoBayBox.style.height = "90px";
    sixthBox.appendChild(cargoBayBox);
}