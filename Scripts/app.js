console.log('hello')

var firstSentence = 'You are the proud employee of the Krusty Krab';
var secondSentence = 'You are the depressed employee of the Chum Bucket';
var thirdSentence = 'You are forced to move in with your new roommate, Larry the Lobster';
var fourthSentence = 'You are forced to move in with your new roommate, Sheldon J. Plankton';
var fifthSentence = 'You eventually move into a high rise anchor, surrounded by famous fry cooks.';
var sixthSentence = 'You are kicked out after blowing too many bubbles. Now homeless, you live in the dumpster outside of the Krusty Krab'
var seventhSentence = 'Eventually, you find a new career as a professional jellyfisher.';
var eighthSentence = 'You end up getting sent to the hospital after a tragic karate accident.';

window.onload = function(event) {
	var nameInput = document.getElementById('first_name');''
	var nameBtn = document.getElementById('name_btn');
	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-five');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice = document.getElementById('choice-eight');

	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	thirdChoice.onclick	= function(event) {
		createRow(thirdSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	nameBtn.onclick = function(event) {
		// console.log(event);
		console.log(nameInput.value);
		createRow('Arr, welcome aboard, ' + nameInput.value);
	}

	console.log(nameInput, nameBtn);
}


//this function creates and adds rows to our app
function createRow(words) {
	console.log(words);
	//we need a new div
	var row = document.createElement('div');
	var col = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = words;
	row.append(col);
	row.className = 'row';
	col.className = 'cols12';
	col.append(p);
	console.log(row);
	//append the whole thing to app
	var app = document.getElementById('app');
	app.append(row);
}