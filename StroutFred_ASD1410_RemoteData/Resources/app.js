// Fred Strout
// ASD 1410
// Remote Data
// 10/8/14

// Create Window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#000"
});

// Create Graphics - could have made a background image instead of combining views.
var graphic1 = Ti.UI.createView({
	backgroundColor: "#f60",
	top: 25,
	left: 45,
	right: 10,
	height: 25,
	borderRadius: 11
});
var graphic2 = Ti.UI.createView({
	backgroundColor: "#f60",
	top: 25,
	left: 10,
	bottom: 20,
	width: 80,
	borderRadius: 37
});
var graphic2a = Ti.UI.createView({
	backgroundColor: "#f60",
	top: 300,
	left: 10,
	bottom: 20,
	width: 80,
	borderRadius: 15
});
var graphic3 = Ti.UI.createView({
	backgroundColor: "#f60",
	top: 40,
	left: 80,
	width: 40,
	height: 40
});

// This is the view with the Remote Data
var graphic4 = Ti.UI.createView({
	backgroundColor: "#000",
	top: 50,
	bottom: 20,
	left: 90,
	right: 15,
	borderRadius: 20
});
var graphic5 = Ti.UI.createLabel({
	backgroundColor: "#000",
	text: "REMOTE DATA",
	font: {fontSize: 33, fontFamily: "DIN Condensed"},
	color: "#f60",
	verticalAlign: "top",
	top: 25,
	right: graphic1.right + 25,
	height: 15
});
var graphic6 = Ti.UI.createView({
	backgroundColor: "#f90",
	top: 80,
	left: 7,
	width: 86,
	height: 70,
	borderWidth: 3
});
var graphic7 = Ti.UI.createView({
	backgroundColor: "#6f6",
	top: 238,
	left: 7,
	width: 86,
	height: 25,
	borderWidth: 3
});
var graphic8 = Ti.UI.createView({
	backgroundColor: "#0cf",
	top: 282,
	left: 7,
	width: 86,
	height: 25,
	borderWidth: 3
});
var net = require("network");

net.netCheck();

mainWindow.add(graphic1, graphic2, graphic2a, graphic3, graphic4, 
	graphic5, graphic6, graphic7, graphic8);
mainWindow.open();
