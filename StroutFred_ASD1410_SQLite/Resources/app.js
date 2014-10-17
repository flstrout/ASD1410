// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

Ti.UI.setBackgroundColor('#333');

// New Window => Navigation Window
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
	top: 45,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor: "#bf0c0c",
	separatorColor: "#bf0c0c"
});

// json.js file link - where the rest of the app resides
var loadData = require("ui");
loadData.loadUI();
navWindow.open();