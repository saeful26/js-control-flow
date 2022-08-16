let num = window.prompt("Berapa nilaimu? ")



if (num >= 90 && num <= 100) {
	alert("nilai A");
} else if (num >= 80 && num <= 89) {
	alert("nilai A-");
} else if (num >= 75 && num <= 79) {
	alert("nilai B+");
} else if (num >= 70 && num <= 74) {
	alert("nilai B");
} else if (num >= 67 && num <= 69) {
	alert("nilai B-");
} else if (num >= 64 && num <= 66) {
	alert("nilai C+");
} else if (num >= 60 && num <= 63) {
	alert("nilai C");
} else if (num >= 50 && num <= 59) {
	alert("nilai D");
} else if (num < 50) {
	alert("nilai E");
}