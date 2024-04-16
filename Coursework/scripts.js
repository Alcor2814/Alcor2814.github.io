var text1 = ["Apollo Missions", "Artemis Missions", "Voyagers", "Mars Rovers", "Galaxies", "Comets", "Moon", "Stars", "Exoplanets"]
var text2 = ["Apollo", "Artemis", "Voyager", "Mars Rovers", "Galaxies", "Comets", "Moon", "Stars", "Exoplanets"]
var folderName = [1, 1, 1, 1, 2, 2, 2, 2, 2]


function randPage(){
	
	let id = 0;
	let btn = "b1"
	let folder = 0;
	
	for (let i = 1; i < 4; i++) {
		id = getRndElement(0, text1.length);
		btn = 'b'+i;
		document.getElementById(btn).innerHTML = text1[id];
		
		btn = 'lb'+i;
		let folder = "name";
		switch(folderName[id]){
			case 1:
				folder = "Featured_Missions";
				break;
			case 2:
				folder = "Notable_Phenomena";
				break;
			default:
		}
		var addr = folder + "/" + text2[id] + ".html";
		document.getElementById(btn).href = addr;
	
		text1.splice(id, 1);
		text2.splice(id, 1);
		folderName.splice(id, 1);
	} 

	return 0;
};

function getRndElement(min, max){
	return Math.floor(Math.random() * (max-min) ) + min;
};