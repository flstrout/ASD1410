// Fred L. Strout
// Objects Project
// ASD - 1410
// 10/2/2014

var results = "";

var customer1 = {
	"name": "Ronald Randle",
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
	"name": "Ronald Randle",
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
	"name": "Ronald Randle",
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
	"name": "Ronald Randle",
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
	"name": "Ronald Randle",
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

var customer6 = new Object();
	customer6.name = "Jason Stelly";
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
	customer7.name = "Jason Stelly";
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
	customer8.name = "Jason Stelly";
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
	customer9.name = "Jason Stelly";
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
	customer10.name = "Jason Stelly";
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

customer6.oppInfo(customer6.name, customer6.opportunity, customer6.promise);
// customer1.display(customer1.fixed);