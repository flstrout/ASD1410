// Fred Strout
// ASD 1410
// CC and OOP
// 10/22/2014

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var winRemote = Titanium.UI.createWindow({  
    title:'Remote Data',
    backgroundColor:'#fff'
});
var tabRemote = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Remote Data',
    window:winRemote
});

var labelRemote = Titanium.UI.createLabel({
	color:'#999',
	top: 10,
	text:'Remote Data Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//winRemote.add(labelRemote);

//
// create controls tab and root window
//
var winLocal = Titanium.UI.createWindow({  
    title:'Local Data',
    backgroundColor:'#fff'
});
var tabLocal = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Local Data',
    window:winLocal
});

var labelLocal = Titanium.UI.createLabel({
	color:'#999',
	top: 10,
	text:'Local Data Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

winLocal.add(labelLocal);


//
//  add tabs
//
tabGroup.addTab(tabRemote);  
tabGroup.addTab(tabLocal);  

var getNet = require("network");
getNet.netCheck();

// open tab group
tabGroup.open();
