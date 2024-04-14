var text1 = ["Apollo Mission", "Artemis Mission", "Voyager", "Mars Rovers", "Galaxies", "Comets", "Moon", "Stars", "Exoplanets"]

function randText(){
	let id = getRndElement(0, text1.length);
	document.getElementById('b1').innerHTML = text1[id];
	text1.splice(id, 1);
	
	id = getRndElement(0, text1.length);
	document.getElementById('b2').innerHTML = text1[id];
	text1.splice(id, 1);
	
	id = getRndElement(0, text1.length);
	document.getElementById('b3').innerHTML = text1[id];
	text1.splice(id, 1);
};

function getRndElement(min, max){
	return Math.floor(Math.random() * (max-min) ) + min;
};