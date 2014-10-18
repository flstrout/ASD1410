// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

var getDatabase = require("database");

var loadDetail = function(dataSource){
	
	// Creates the Make It Right Popup Modal
	var openSaveModal = function(){
		
		// Change Popup Message - Not Yet Available
		var saveSettings = function(){
			var thisRowID = rowID;
			getDatabase.del(thisRowID);
			detailWindow.close();
			/*
			navWindow.close();
			navWindow.open();
			*/
			//console.log(getDatabase.tblOpportunities);	
		};
		
		var closeSaveModal = function(){
			detailWindow.remove(tintView);
			detailWindow.remove(saveModal);
		};
		
		// Tint the Main Window and Open the Modal View
		var tintView = Ti.UI.createView({
			backgroundColor: "#000",
			opacity: .60,
			zIndex: 2
		});
		
		var saveModal = Ti.UI.createView({
			borderRadius: 5,
			top: 85,
			height: "40%",
			width: "80%",
			backgroundColor: "#000",
			zIndex: 3
		});
		
		// Popup Message
		var lblSaveChanges = Ti.UI.createLabel({
			text: "Make It Right!!!",
			rowID: dataSource.RowID,
			top: 30,
			font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		var lblSaveDesc = Ti.UI.createLabel({
			text: "Would you like to close\nthis Recovery Opportunity?",
			textAlign: "center",
			top: 55,
			font: {fontSize: 16, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		// Popup Buttons
		var lblSave = Ti.UI.createLabel({
			text: "Make It Right!!!",
			top: 168,
			right: "50%",
			borderColor: "#eee",
			borderWidth: 2,
			color: "#0f0",
			width: 129,
			height: 35,
			font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			textAlign: "center"
		});
		
		lblSave.addEventListener("click", saveSettings);
		
		var lblCancel = Ti.UI.createLabel({
			text: "Cancel",
			top: 168,
			left: "50%",
			borderColor: "#eee",
			borderWidth: 2,
			color: "#f00",
			width: 129,
			height: 35,
			font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			textAlign: "center"
		});
		
		lblCancel.addEventListener("click", closeSaveModal);
		
		saveModal.add(lblSaveChanges, lblSaveDesc, lblSave, lblCancel);
		detailWindow.add(tintView, saveModal);
	};
	
	// Creates the Opportunty Detail Window
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#bf0c0c",
		titleAttributes: {color: "#fc0"},
		backButtonTitle: "Back"
	});
	
	// Create Menu Bar
	var menuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleMB = Ti.UI.createLabel({
		text: "Opportunity",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});
	
	var lblCustomer = Ti.UI.createLabel({
		text: "Customer:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: menuBar.height + 10,
		height: 14,
		left: 13
	});
	
	// Labels
	var lblDate = Ti.UI.createLabel({
		text: "Date:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: menuBar.height + 10,
		height: 14,
		left: 213
	});
	
	var lblOpportunity = Ti.UI.createLabel({
		text: "Opportunity:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblCustomer.top + lblCustomer.height + 45,
		height: 14,
		left: 13
	});
	
	var lblPromise = Ti.UI.createLabel({
		text: "Promised Resolution:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblOpportunity.top + lblOpportunity.height + 75,
		height: 14,
		left: 13
	});
	
	var lblPromisedBy = Ti.UI.createLabel({
		text: "Promised By:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblPromise.top + lblPromise.height + 75,
		height: 14,
		left: 13
	});
	
	// Data
	var rowID = dataSource.id;
	exports.rowID = rowID;
	
	var dataCustomer = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 8
	});
	exports.dataCustomer = dataCustomer;
	
	var dataDate = Ti.UI.createLabel({
		text: dataSource.date,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 208
	});
	exports.dataDate = dataDate;
	
	var dataOpportunity = Ti.UI.createLabel({
		text: dataSource.problem,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblOpportunity.top + 16,
		left: 8
	});
	exports.dataOpportunity = dataOpportunity;
	
	// Highlighted the Promised Resolution
	var customBackground = Ti.UI.createView({
		borderColor: "#222",
		borderWidth: 2,
		borderRadius: 7,
		backgroundColor: "#ffcc00",
		top: lblPromise.top + 18,
		height: 70,
		left: 4,
		width: 308,
		zIndex: 1
	});
	
	var dataPromise = Ti.UI.createLabel({
		text: dataSource.promise,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#bf0c0c",
		textAlign: "left",
		verticalAlign: 1,
		top: lblPromise.top + 20,
		height: 66,
		left: 8,
		width: 300,
		zIndex: 2
	});
	exports.dataPromise = dataPromise;
	
	var dataPromisedBy = Ti.UI.createLabel({
		text: dataSource.manager,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblPromisedBy.top + 16,
		left: 8
	});
	
	// Popup Modal buttons
	var butMakeItRight = Ti.UI.createLabel({
		text: "Make it Right!",
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#0f0",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		top: 425,
		left: 10,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	butMakeItRight.addEventListener("click", openSaveModal);
	
	var butCancel = Ti.UI.createLabel({
		text: "-Cancel-",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: 425,
		left: 135,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	butCancel.addEventListener("click", function(){
		detailWindow.close();
	});
	
	// Creates the Menu Bar Buttons
	var butAdd = Ti.UI.createButton({
		title: "Edit",
		left: 15
	});
	
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
	
	var getUpdate = require("update"); // Declared here because it creates a loop if it is declared globally
	
	menuBar.add(titleMB, butAdd);
	butAdd.addEventListener("click", getUpdate.loadInput);
	detailWindow.add(menuBar, lblCustomer, lblDate, lblOpportunity, lblPromise, lblPromisedBy, dataCustomer,
					dataDate, dataOpportunity, dataPromise, dataPromisedBy, butMakeItRight, butCancel, customBackground, tagline);
	navWindow.openWindow(detailWindow);
};
exports.loadDetail = loadDetail;