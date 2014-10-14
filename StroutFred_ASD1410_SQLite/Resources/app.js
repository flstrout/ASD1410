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

// Create Table
var opportunities = Ti.UI.createTableView({
	top: 30,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor: "#bf0c0c",
	separatorColor: "#bf0c0c"
});

var getSettings = require("settings");
var getDB = require("database");
var getUI = require("ui");

navWindow.open();