var playerHull = new equipment(0,"Cheap Hull",1);
var playerEngine = new equipment(1,"Cheap Engine",1);
var playerDrill = new equipment(2,"Cheap Drill",1);
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