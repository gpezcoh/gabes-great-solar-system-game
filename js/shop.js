function Shop(){
	this.bargain;
	this.items = [];
	this.prices;
}

function Item(){
	this.item;
	this.price;
	this.bargain;
}

var shopMessage = createMessage("Hi! How can I help you today?",0)
var shop1 = createMessage("Buy",1)
var shop2 = createMessage("Sell",2)
var shop3 = createMessage("Leave",3)
var shop4 = createMessage("We have plenty of great things for you, take a look!",0)
var shop5 = createMessage("Let's see what you have!",0)
shopMessage.answers = [shop1,shop2,shop3];
shop1.child = shop4;
shop2.child = shop5;
shop5.followup = 1;

function followup(num){
	switch(num){
		case 1:
			sellStuff();
			break;
	}
}

function sellStuff(){
	inventory.style.display = "inline";
    universe.style.display = "none";
}