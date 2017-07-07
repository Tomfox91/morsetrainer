morse = {
	'a': '.-',
	'b': '-...',
	'c': '-.-.',
	'd': '-..',
	'e': '.',
	'f': '..-.',
	'g': '--.',
	'h': '....',
	'i': '..',
	'j': '.---',
	'k': '-.-',
	'l': '.-..',
	'm': '--',
	'n': '-.',
	'o': '---',
	'p': '.--.',
	'q': '--.-',
	'r': '.-.',
	's': '...',
	't': '-',
	'u': '..-',
	'v': '...-',
	'w': '.--',
	'x': '-..-',
	'y': '-.--',
	'z': '--..'
};



function setColor(s) {
	if (s) {
		$('div').css('background-color', 'yellow');
	} else {
		$('div').css('background-color', '#444');
	}
}

var unit = 300;


function displayMorseString(string) {
	function off(string) {
		setColor(0);
		setTimeout(displayMorseString, unit, string);
	}

	if (string.length === 0) return;

	if (string[0] == '.') {
		setColor(1)
		setTimeout(off, unit, string.substring(1));
	} else if (string[0] == '-') {
		setColor(1)
		setTimeout(off, 3 * unit, string.substring(1));
	} else if (string[0] == ' ') {
		setTimeout(displayMorseString, 3 * unit, string.substring(1));
	}
}



var listener = new window.keypress.Listener();

function promptLetter() {
	window.lett = String.fromCharCode(96 + Math.ceil(Math.random()*26));

	displayMorseString(morse[lett]);

	listener.reset();
	listener.simple_combo('enter', function() {displayMorseString(morse[lett]);});
	listener.simple_combo(lett, function() {
		$('body').css('background-color', 'green');
		setTimeout(function() {$('body').animate({'background-color': '#666'}, 500);}, 500);
		setTimeout(promptLetter, 2000);
	});
}

setTimeout(promptLetter, 1000);