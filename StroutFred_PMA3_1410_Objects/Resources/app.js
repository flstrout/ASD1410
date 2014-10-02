// Fred L. Strout
// Objects Project
// ASD - 1410
// 10/2/2014

var mainWindow = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var label = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var loadObjects = require("object");
mainWindow.add(label);
mainWindow.open();