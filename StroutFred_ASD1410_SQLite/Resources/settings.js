// Fred Strout          Still need to create a Save or Cancel dialog box
// ASD-1410             and tie in the saveSettings function and the
// SQLite               closeSaveModal function.
// 10/12/2014

var loadSettings = function(){
	
	// Define Settings Variables and Set Initial Values
	var mgrName = "";
	var mgrPos = "";
	var homeStore = "";
	var eid = "";
	var password = "";
	
	// mgrName
	if (Ti.App.Properties.getString("name") === null){
		mgrName = Ti.App.Properties.setString("name", "Manager's Full Name");
	} else {
		mgrName = Ti.App.Properties.getString("name");
	};
	
	// mgrPos
	if (Ti.App.Properties.getString("position") === null){
		mgrPos = Ti.App.Properties.setString("position", "Manager's Position");
	} else {
		mgrPos = Ti.App.Properties.getString("position");
	};
	
	// homeStore
	if (Ti.App.Properties.getString("store") === null){
		homeStore = Ti.App.Properties.setString("store", "National Store No.");
	} else {
		homeStore = Ti.App.Properties.getString("store");
	};

	// eid
	if (Ti.App.Properties.getString("eid") === null){
		eid = Ti.App.Properties.setString("eid", "EID");
	} else {
		eid = Ti.App.Properties.getString("eid");
	};
	
	// password
	if (Ti.App.Properties.getString("password") === null){
		password = Ti.App.Properties.setString("password", "EID Password");
	} else {
		password = Ti.App.Properties.getString("password");
	};
	
	// Show/Hide the Password Feature
	var showPassword = function(){
		txtPassword.passwordMask = false;
		lblShowPassword.visible = false;
		lblHidePassword.visible = true;
	};
	
	var hidePassword = function(){
		txtPassword.passwordMask = true;
		lblShowPassword.visible = true;
		lblHidePassword.visible = false;
	};
	
	// Open a Save or Cancel Dialog Box
		// Popup Cancel Button closes the settingsWindow and reopens it with the original data
		var closeSaveModal = function(){
			setWindow.close();
			showSettings();
		};
		
		// Save new settings
		var saveSettings = function(){
			Ti.App.Properties.setString("name", txtManager.value);
			// manager = txtManager.value;
			Ti.App.Properties.setString("position", txtPosition.value);
			// position = txtPosition.value;
			Ti.App.Properties.setString("store", txtHomeStore.value);
			// homeStore = txtHomeStore.value;
			Ti.App.Properties.setString("eid", textEID.value);
			// eid = txtEID.value;
			Ti.App.Properties.setString("password", txtPassword.value);
			// password = txtPassword.value;
			setWindow.close();
		};
	// Save Settings Popup Modal
	var openSaveModal = function(){
		
		// Save the Current Values to the Global Variables
		var saveSettings = function(){
			manager = txtManager.value;
			position = txtPosition.value;
			homeStore = txtHomeStore.value;
			eid = txtEID.value;
			password = txtPassword.value;
			settingsWindow.remove(tintView);
			settingsWindow.remove(saveModal);
			setWindow.close();
		};
		
		// Popup Cancel Button closes the settingsWindow and reopens it with the original data
		var closeSaveModal = function(){
			setWindow.close();
			loadSettings();
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
		
		// Popup Modal Message
		var lblSaveChanges = Ti.UI.createLabel({
			text: "Save Changes?",
			top: 30,
			font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		var lblSaveDesc = Ti.UI.createLabel({
			text: "Would you like to\nsave changes to\n the data file?",
			textAlign: "center",
			top: 55,
			font: {fontSize: 16, fontFamily: "Helvetica Neue", fontWeight: "bold"},
			color: "#eee"
		});
		
		// Popup Buttons
		var lblSave = Ti.UI.createLabel({
			text: "Save",
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
		settingsWindow.add(tintView, saveModal);
	};
	
	// Form Cancel Button Function
		var closeSettings = function(){
			setWindow.close();
		};

	// Creates the Settings Window
	var setWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#bf0c0c",
		titleAttributes: {color: "#fc0"},
		backButtonTitle: "Back"
	});
	
	// Creates a Scroll View - needed when the keyboard is open
	var settingsWindow = Ti.UI.createScrollView({
		bottom: 34
	});
	
	// Create Menu Bar
	var settingsMenuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleSMB = Ti.UI.createLabel({
		text: "Settings",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});
	
	// Labels
	var lblManager = Ti.UI.createLabel({
		text: "Manager:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: settingsMenuBar.height + 10,
		height: 14,
		left: 13
	});
	
	var lblPosition = Ti.UI.createLabel({
		text: "Position:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblManager.top + lblManager.height + 60,
		height: 14,
		left: 13
	});
	
	var lblHomeStore = Ti.UI.createLabel({
		text: "Home Store:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblPosition.top + lblPosition.height + 60,
		height: 14,
		left: 13
	});
	
	var lblEID = Ti.UI.createLabel({
		text: "EID:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblHomeStore.top + lblHomeStore.height + 60,
		height: 14,
		left: 13
	});
	
	var lblPassword = Ti.UI.createLabel({
		text: "Password:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblEID.top + lblEID.height + 60,
		height: 14,
		left: 13
	});
	
	var lblShowPassword = Ti.UI.createLabel({
		visible: true,
		text: "*Show Password",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#0f0",
		top: lblEID.top + lblEID.height + 60,
		height: 14,
		right: 13
	});
	
	var lblHidePassword = Ti.UI.createLabel({
		visible: false,
		text: "*Hide Password",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#0f0",
		top: lblEID.top + lblEID.height + 60,
		height: 14,
		right: 13
	});
	
	// Input Fields
	var txtManager = Ti.UI.createTextField({
		value: mgrName,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblManager.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPosition = Ti.UI.createTextField({
		value: mgrPos,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblPosition.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	// Tells the lblShowPassword and lblHidePassword labels what to do when clicked.
	lblShowPassword.addEventListener("click", showPassword);
	lblHidePassword.addEventListener("click", hidePassword);
	 
	var txtHomeStore = Ti.UI.createTextField({
		value: homeStore,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblHomeStore.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtEID = Ti.UI.createTextField({
		value: eid,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblEID.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPassword = Ti.UI.createTextField({
		value: password,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		passwordMask: true,
		top: lblPassword.top + 20,
		left: 10,
		right: 10,
		height: 40,
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

	butCancel.addEventListener("click", closeSettings);
	
	settingsMenuBar.add(titleSMB);
	settingsWindow.add(settingsMenuBar, lblManager, lblPosition, lblHomeStore, lblEID, lblPassword,
						txtManager, txtPosition, txtHomeStore, txtEID, txtPassword, butSave,
						butCancel, lblShowPassword, lblHidePassword);
	setWindow.add(settingsWindow, tagline);
	navWindow.openWindow(setWindow);	
	
	console.log(mgrName);
	console.log(mgrPos);
	console.log(homeStore);
};

exports.loadSettings = loadSettings;