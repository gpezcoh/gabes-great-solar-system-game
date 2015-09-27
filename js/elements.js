var Scoydian = new Element("Scoydian",1,0,10,100);
var Estuysium = new Element("Estuysium",2,0,20,150);
var Dascite = new Element("Dascite",3,0,30,200);
var Druenium = new Element("Druenium",4,0,40,250);
var Zaprite = new Element("Zaprite",5,0,50,300);
var Ethaucium = new Element("Ethaucium",6,0,60,350);
var Ashaonium = new Element("Ashaonium",7,0,70,400);
var Truanyx = new Element("Truanyx",8,0,80,450);
var Iuprietine = new Element("Iuprietine",9,0,90,500);
var Zeblite = new Element("Zeblite",10,0,100,550);
var elementList = [Scoydian,Estuysium,Dascite,Druenium,Zaprite,Ethaucium,
Ashaonium,Truanyx,Iuprietine,Zeblite];

function Element(name,planetaryRarity,amount,value,depth)
{
	this.name = name;
	this.planetaryRarity = planetaryRarity;
	this.amount = amount;
	this.value = value;
	this.depth = depth;
}