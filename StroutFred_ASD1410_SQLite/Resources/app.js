// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

var tableWindow = Ti.UI.createWindow({
	backgroundColor: "#bf0c0c",
	title: "Customer Recovery",
	statusBarStyle: 2,
	barColor: "#bf0c0c",
	titleAttributes: {color: "#fc0"}
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

var getSettings = require("settings");
var getDB = require("database");

navWindow.open();