var playerHull = new equipment(0);
var playerEngine = new equipment(1);
var playerDrill = new equipment(2);
var playerFuelTank = new equipment(3);
var playerLanguageTranslator = new equipment(4);
var playerCargoBay = new equipment(5);



function equipment(type)
{
	switch(type){
		case 0:
			this.name = "hull"
			this.health = 100;
			break;
		case 1:
			this.name = "Engine"
			this.range = 100;
			break;
		case 2:
			this.name = "drill"
			this.depth = 100;
			this.durability = 100;
			break;
		case 3:
			this.name = "fuelTank"
			this.capacity = 1000;
			break;
		case 4:
			this.name = "languageTranslator"
			this.complexity = 0;
			break;
		case 5:
			this.name = "cargoBay"
			this.storage = 160;
			break;					
}