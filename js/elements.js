var elementList = ["Scoydian","Estuysium","Dascite","Druenium","Zaprite","Ethaucium",
"Ashaonium","Truanyx","Iuprietine",];
var Scoydian = new Element("Scoydian",1,0,10);
var Estuysium = new Element("Estuysium",2,0,20);
var Dascite = new Element("Dascite",3,0,30);
var Druenium = new Element("Druenium",4,0,40);
var Zaprite = new Element("Zaprite",5,0,50);
var Ethaucium = new Element("Ethaucium",6,0,60);
var Ashaonium = new Element("Ashaonium",7,0,70);
var Truanyx = new Element("Truanyx",8,0,80);
var Iuprietine = new Element("Iuprietine",9,0,90);
var Zeblite = new Element("Zeblite",10,0,100);

function Element(name,rarity,amount,value)
{
	this.name = name;
	this.rarity = rarity;
	this.amount = amount;
	this.value = value;
}

