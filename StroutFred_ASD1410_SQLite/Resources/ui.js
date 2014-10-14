var list = [];

// Home Screen Table Header
var headView = Ti.UI.createView({ // Base View
	backgroundColor: "#bf0c0c"
});

var headLabel = Ti.UI.createLabel({ // Label applied to the Base View
	text: "OPEN OPPORTUNITIES",
	color: "#ffcc00",
	font: {fontWeight: "bold"},
	left: 5
});

headView.add(headLabel);

var tableSection = Ti.UI.createTableViewSection({ // Set the Sections Header to the headView variable
	headerView: headView
});

list.push(tableSection);

var db = require("database");

// Populate the Sections with Data
for (o in db.tblOpportunities){ 
	var sectionDetail = Ti.UI.createTableViewRow({
		customer: db.tblOpportunities[o].customer,
		hasChild: true,
		height: 41,
		backgroundColor: "#eee"
	});
	var customerLabel = Ti.UI.createLabel({
		text: db.tblOpportunities[o].customer,
		top: 3,
		left: 13
	});
	
	var promiseLabel = Ti.UI.createLabel({
		text: db.tblOpportunities[o].promised,
		top: 22,
		left: 15,
		font: {fontSize: 12}
	});
	
	sectionDetail.add(customerLabel, promiseLabel);
	tableSection.add(sectionDetail);
};

// Create Menu Bar
var menuBar = Ti.UI.createView({
	backgroundColor: "#ffcc00",
	borderColor: "#333",
	borderWidth: 2,
	top: 0,
	height: 50
});

var titleMB = Ti.UI.createLabel({
	text: "Home",
	font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
	color: "#333"
});

// Creates the Menu Bar Buttons
var butAdd = Ti.UI.createButton({
	title: "Add",
	left: 15
});

var butSettings = Ti.UI.createButton({
	title: "Settings",
	right: 15
});

// Footer Tagline
var tagline = Ti.UI.createLabel({
	borderColor: "#333",
	borderWidth: 2,
	backgroundColor: "#fc0",
	font: {fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: "bold"},
	color: "#333",
	text: "Be Clean - Be Nice - Be Fast - Get It Right - Make It Right",
	textAlign: "center",
	bottom: 10,
	width: "100%",
	height: 22
});

menuBar.add(titleMB, butAdd, butSettings);
opportunities.setData(list);
opportunities.add(tableSection);
tableWindow.add(opportunities, menuBar, tagline);