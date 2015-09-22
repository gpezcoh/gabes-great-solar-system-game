var playerHull = new equipment(0,"hull");
var playerEngine = new equipment(1,"engine");
var playerDrill = new equipment(2,"drill");
var playerFuelTank = new equipment(3,"fuelTank");
var playerLanguageTranslator = new equipment(4,"languageTranslator");
var playerCargoBay = new equipment(5,"cargoBay");

function equipment(type, name)
{
	switch(type){
		case 0:
			this.name = name;
			this.health = 100;
			break;
		case 1:
			this.name = name;
			this.range = 100;
			break;
		case 2:
			this.name = name;
			this.depth = 100;
			this.durability = 100;
			break;
		case 3:
			this.name = name;
			this.capacity = 1000;
			break;
		case 4:
			this.name = name;
			this.complexity = 0;
			break;
		case 5:
			this.name = name;
			this.storage = 160;
			break;	
			}				
}