// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014
var today = "";
var getSettings = require("settings");
var getDatabase = require("database");
var manager = Ti.App.Properties.getString("name");
var store = Ti.App.Properties.getString("store");
var customer = "";
var problem = "";
var promise = "";

var todayDate = function(){
	today = new Date();
	var mm = today.getMonth()+1;  // +1 because January returns as zero, February returns as 1, etc, etc.
	var dd = today.getDate();
	var yyyy = today.getFullYear();
	
	// add a leading zero to months and days that have less than two digits
	if(mm < 10) {
	    mm= "0" + mm;
	};
	
	if(dd < 10) {
	    dd= "0" + dd;
	};
	
	today = mm + "/" + dd + "/" + yyyy;
};

// Add a new record
var loadInput = function(){
	
	todayDate();
	
	// Submit Data Popup Modal
	var openSaveModal = function(){
		
		// Change Popup Message - Not Yet Available
		var saveSettings = function(){
			customer = txtCustomer.value;
			problem = txtOpportunity.value;
			promise = txtPromise.value;
			
			console.log(today);
			console.log(store);
			console.log(manager);
			console.log(customer);
			console.log(problem);
			console.log(promise);
			
			getDatabase.create(customer, problem, promise, today, manager, store);
			addNewWindow.close();
		};
		
		var closeSaveModal = function(){
			addNewWindow.remove(tintView);
			addNewWindow.remove(saveModal);
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
			text: "Confirm Submission",
			top: 30,
			font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		var lblSaveDesc = Ti.UI.createLabel({
			text: "Do you want to save\nthis information\nto the data file?",
			textAlign: "center",
			top: 55,
			font: {fontSize: 16, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		// Popup Buttons
		var lblSave = Ti.UI.createLabel({
			text: "Submit",
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
		addNewWindow.add(tintView, saveModal);
		
	};
	
	// Create the Window
	var addNewWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#bf0c0c",
		titleAttributes: {color: "#fc0"},
		backButtonTitle: "Back"
	});
	
	// Creates a Scroll View - needed when the keyboard is open
	var addWindow = Ti.UI.createScrollView({});
	
	// Create Menu Bar
	var addMenuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleAMB = Ti.UI.createLabel({
		text: "Opportunity",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});

	// Labels
	var lblOpportunity = Ti.UI.createLabel({
		text: "Opportunity:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: addMenuBar.height + 10,
		height: 14,
		left: 13
	});
	
	var lblRequired1 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: addMenuBar.height + 10,
		height: 14,
		right: 13
	});
	
	var lblCustomer = Ti.UI.createLabel({
		text: "Customer:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblOpportunity.top + lblOpportunity.height + 110,
		height: 14,
		left: 13
	});
	
	var lblRequired2 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: lblOpportunity.top + lblOpportunity.height + 110,
		height: 14,
		right: 13
	});
	
	var lblPromise = Ti.UI.createLabel({
		text: "Promised Resolution:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblCustomer.top + lblCustomer.height + 60,
		height: 14,
		left: 13
	});
	
	var lblRequired3 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: lblCustomer.top + lblCustomer.height + 60,
		height: 14,
		right: 13
	});
	
	// Input Fields
	var txtOpportunity = Ti.UI.createTextField({
		hintText: "What Was Wrong?",
		verticalAlign: 1,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblOpportunity.top + 20,
		left: 10,
		right: 10,
		height: 100,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtCustomer = Ti.UI.createTextField({
		hintText: "Customers Name",
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblCustomer.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPromise = Ti.UI.createTextField({
		hintText: "Make Them Happy!!!",
		verticalAlign: 1,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblPromise.top + 20,
		left: 10,
		right: 10,
		height: 100,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	// Form Buttons
	var butSave = Ti.UI.createLabel({
		text: "Save",
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
	
	butSave.addEventListener("click", openSaveModal);
	
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
		addNewWindow.close();
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
	
	addMenuBar.add(titleAMB);
	addWindow.add(addMenuBar, lblOpportunity, lblCustomer, lblPromise, lblRequired1, lblRequired2,
				lblRequired3, txtOpportunity, txtCustomer, txtPromise, butSave, butCancel, tagline);
	addNewWindow.add(addWindow);
	navWindow.openWindow(addNewWindow);
};
exports.loadInput = loadInput;
