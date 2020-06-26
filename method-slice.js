var name = prompt("What is your name ?");
var name2 = name.slice(1,name.length);
name2 = name.toLowerCase();
name = name.slice(0,1);
name = name.toUpperCase();
alert("Hello, " + name + name2.slice(1,name2.length));