var twit = prompt("Compose your twitter?");

var number2 = 140;

alert(twit.slice(0,140));

alert("You have written " + twit.length + " character, you have " + (number2 - twit.length) + " character remaining");