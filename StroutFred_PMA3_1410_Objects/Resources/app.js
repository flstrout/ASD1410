// Fred L. Strout
// Objects Project
// ASD - 1410
// 10/2/2014

var mainWindow = Titanium.UI.createWindow({  
    title: "Objects",
    backgroundColor:'#ccc'
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var loadObjects = require("object");
navWindow.open();