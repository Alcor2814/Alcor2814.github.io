var text1 = ["Apollo Missions", "Artemis Missions", "Voyagers", "Mars Rovers", "Galaxies", "Comets", "Moon", "Stars", "Exoplanets"]
var text2 = ["Apollo", "Artemis", "Voyager", "Mars Rovers", "Galaxies", "Comets", "Moon", "Stars", "Exoplanets"]
var folderName = ["Featured_Missions", "Featured_Missions", "Featured_Missions", "Featured_Missions", "Notable_Phenomena", "Notable_Phenomena", "Notable_Phenomena", "Notable_Phenomena", "Notable_Phenomena"]


function randPage(){
	
	let id = 0;
	let btn = "b1"
	
	for (let i = 1; i < 4; i++) {
		id = getRndElement(0, text1.length);
		btn = 'b'+i;
		document.getElementById(btn).innerHTML = text1[id];
		
		var addr = folderName[id] + "/" + text2[id] + ".html";
		document.getElementById(btn).setAttribute("href", addr);
	
		text1.splice(id, 1);
		text2.splice(id, 1);
		folderName.splice(id, 1);
	} 
};

function getRndElement(min, max){
	return Math.floor(Math.random() * (max-min) ) + min;
};