// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

var manager = "Fred Strout";
var position = "DM2";
var homeStore = "11766-10 (Rayne, LA)";
var eid = "e1213048";
var password = "Dennis01";
var getSettings = require("settings");
var getNew = require("new");
var getDetail = require("detail");
var getDatabase = require("database");

var loadUI = function(){
	
	getDatabase.read();
	var Opportunities = getDatabase.tblOpportunities;
	
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
	
	// Send Variables outside the Loop so they won't get overwritten
	list.push(tableSection);
	
	// Populate the Sections with Data
	for (o in Opportunities){ 
		var sectionDetail = Ti.UI.createTableViewRow({
			RowID: Opportunities[o].id,
			title: Opportunities[o].Customer,
			DateCreated: Opportunities[o].DateCreated,
			Opportunity: Opportunities[o].Opportunity,
			Promise: Opportunities[o].Promise,
			PromisedBy: Opportunities[o].PromisedBy,
			hasChild: true,
			backgroundColor: "#eee"
		});
		
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
			text: "Be Clean - Be Nice - Be Fast - Get It Right! - Make It Right!!!",
			textAlign: "center",
			bottom: 10,
			width: "100%",
			height: 22
		});
	
	menuBar.add(titleMB, butAdd, butSettings);
	butAdd.addEventListener("click", getNew.loadInput);
	butSettings.addEventListener("click", getSettings.loadSettings);
	opportunities.setData(list);
	opportunities.addEventListener("click", function(event){
		getDetail.loadDetail(event.source);
	});
	tableWindow.add(opportunities, menuBar, tagline);
};
exports.loadUI = loadUI;