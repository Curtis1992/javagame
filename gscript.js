function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;


function moveCommad(direction) {
	var whatHappens;
	switch(direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
			case "back":
			whatHappens = "you arrived home";
			break;
			case "right":
			whatHappens = "you found a river";
			break;
			case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please a valid direction";	
	}
	return whatHappens;	
}