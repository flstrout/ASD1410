// Fred L. Strout
// Objects Project
// ASD - 1410
// 10/2/2014

// Global Variables
var results = "";
var sizeFont = 12;
var buttonWidth = "43%";

// Code for the Event Listener
var openAlert = function(){
	viewCustomer(this.pass);
};

// My Objects using Literal Notation
var customer1 = {
	"name": "Aaron Abernathy",
	"opportunity": "McDouble was made wrong",
	"promise": "replace the McDouble",
	"fixed":"yes",
	"display" : function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	},	
	"oppInfo": function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	}
};

var customer2 = {
	"name": "Barry Banner",
	"opportunity": "McDouble was made wrong",
	"promise": "replace the McDouble",
	"fixed":"yes",
	"display" : function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	},	
	"oppInfo": function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	}
};

var customer3 = {
	"name": "Charles Chestnut",
	"opportunity": "McDouble was made wrong",
	"promise": "replace the McDouble",
	"fixed":"yes",
	"display" : function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	},	
	"oppInfo": function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	}
};

var customer4 = {
	"name": "David Dickerson",
	"opportunity": "McDouble was made wrong",
	"promise": "replace the McDouble",
	"fixed":"yes",
	"display" : function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	},	
	"oppInfo": function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	}
};

var customer5 = {
	"name": "Edward Estherhouse",
	"opportunity": "McDouble was made wrong",
	"promise": "replace the McDouble",
	"fixed":"yes",
	"display" : function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	},	
	"oppInfo": function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	}
};

// My Objects using Dot Notation
var customer6 = new Object();
	customer6.name = "Frankie Fingers";
	customer6.opportunity = "fries were cold";
	customer6.promise = "replace the fries";
	customer6.fixed = "no";
	customer6.display = function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	};
	customer6.oppInfo = function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	};

var customer7 = new Object();
	customer7.name = "Gary Gustaf";
	customer7.opportunity = "fries were cold";
	customer7.promise = "replace the fries";
	customer7.fixed = "no";
	customer7.display = function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	};
	customer7.oppInfo = function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	};
var customer8 = new Object();
	customer8.name = "Harry Houdini";
	customer8.opportunity = "fries were cold";
	customer8.promise = "replace the fries";
	customer8.fixed = "no";
	customer8.display = function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	};
	customer8.oppInfo = function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	};
var customer9 = new Object();
	customer9.name = "Irvin Ignatio";
	customer9.opportunity = "fries were cold";
	customer9.promise = "replace the fries";
	customer9.fixed = "no";
	customer9.display = function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	};
	customer9.oppInfo = function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	};
var customer10 = new Object();
	customer10.name = "Jason Jasper";
	customer10.opportunity = "fries were cold";
	customer10.promise = "replace the fries";
	customer10.fixed = "no";
	customer10.display = function (yesNo){
		if(yesNo === "no"){
			results = "This opportunity HAS NOT been fixed therefore it WILL show in the startup Opportunity List.";
		} else {
			results = "This opportunity HAS been fixed therefore it WILL NOT show in the startup Opportunity List.";
		};
	};
	customer10.oppInfo = function(name1, opportunity1, promise1){
		customer1.display(customer1.fixed);
		alert("The customers name is "+ name1 + ".\n\nTheir " + opportunity1 + ".\n\nWe promised to " + promise1 + ".\n\n" + results);
	};

// This line calls the oppInfo property of the selected customer which in turn displays the appropriate information.
var viewCustomer = function (customer){
	customer.oppInfo(customer.name, customer.opportunity, customer.promise);
};

// Buttons
var button1 = Ti.UI.createLabel({
	text: customer1.name,
	pass: customer1,
	font: {fontSize: sizeFont},
	top: 35,
	height: 40,
	width: buttonWidth,
	left: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button2 = Ti.UI.createLabel({
	text: customer2.name,
	pass: customer2,
	font: {fontSize: sizeFont},
	top: button1.top + 55,
	height: 40,
	width: buttonWidth,
	left: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button3 = Ti.UI.createLabel({
	text: customer3.name,
	pass: customer3,
	font: {fontSize: sizeFont},
	top: button2.top + 55,
	height: 40,
	width: buttonWidth,
	left: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button4 = Ti.UI.createLabel({
	text: customer4.name,
	pass: customer4,
	font: {fontSize: sizeFont},
	top: button3.top + 55,
	height: 40,
	width: buttonWidth,
	left: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button5 = Ti.UI.createLabel({
	text: customer5.name,
	pass: customer5,
	font: {fontSize: sizeFont},
	top: button4.top + 55,
	height: 40,
	width: buttonWidth,
	left: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button6 = Ti.UI.createLabel({
	text: customer6.name,
	pass: customer6,
	font: {fontSize: sizeFont},
	top: 35,
	height: 40,
	width: buttonWidth,
	right: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button7 = Ti.UI.createLabel({
	text: customer7.name,
	pass: customer7,
	font: {fontSize: sizeFont},
	top: button1.top + 55,
	height: 40,
	width: buttonWidth,
	right: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button8 = Ti.UI.createLabel({
	text: customer8.name,
	pass: customer8,
	font: {fontSize: sizeFont},
	top: button2.top + 55,
	height: 40,
	width: buttonWidth,
	right: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button9 = Ti.UI.createLabel({
	text: customer9.name,
	pass: customer9,
	font: {fontSize: sizeFont},
	top: button3.top + 55,
	height: 40,
	width: buttonWidth,
	right: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

var button10 = Ti.UI.createLabel({
	text: customer10.name,
	pass: customer10,
	font: {fontSize: sizeFont},
	top: button4.top + 55,
	height: 40,
	width: buttonWidth,
	right: 15,
	backgroundColor: "#fff",
	borderColor: "#222",
	borderRadius: 3,
	textAlign: "center"
});

// Add Labels and Event Listeners to Objects and Views
button1.addEventListener("click", openAlert);
button2.addEventListener("click", openAlert);
button3.addEventListener("click", openAlert);
button4.addEventListener("click", openAlert);
button5.addEventListener("click", openAlert);
button6.addEventListener("click", openAlert);
button7.addEventListener("click", openAlert);
button8.addEventListener("click", openAlert);
button9.addEventListener("click", openAlert);
button10.addEventListener("click", openAlert);
mainWindow.add(button1, button2, button3, button4, button5, button6, button7, button8, button9, button10);
//viewCustomer(customer1);
// customer1.display(customer1.fixed);