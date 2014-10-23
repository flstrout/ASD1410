// Fred Strout
// ASD 1410
// CC and OOP
// 10/22/2014

var display = require("ui");
var DB = require("database");
Ti.Database.install("/database/local.sqlite", "localDB");

// Wrap the whole package in a function for stronger execution control
var netCheck = function(){
	
	// Set the api location
	var url = "http://api.reddit.com/r/gliding";
	
	// Create a variable to pass to the onload property of the createHTTPClient method
	var loadData = function (e){
		var thisData = JSON.parse(this.responseText);
		// console.log(thisData);
		var posts = thisData.data.children;
		var postArray = [];
		
		// Loop through the remote data to extract only the desired data and push that data to its own array
		for(i=0, j=posts.length; i<j; i++){
			var post = {
				title: posts[i].data.title,
				author: posts[i].data.author
			};
			
			// Push the extracted data to the array
			postArray.push(post);
		};
		// console.log(postArray);
		display.displayData(postArray);
		DB.installData(postArray);
		//DB.createTable(postArray);
	};
	
	// Create an alert box to display an error message for the onerror property of the createHTTPClient method
	var errorData = function (e){
		alert("Error: " + e.error);
	};
	
	// If statement to detect if the device is connected to the Network
	if (Ti.Network.online){ // If True, then
		var db = Ti.Database.open ('localDB');
		db.execute('DELETE FROM tblData');
		var remoteData = Ti.Network.createHTTPClient({
			onload: loadData,
			onerror: errorData
		});
		remoteData.open("GET", url);
		remoteData.send();
		
	}else{ // If False, then
		alert("Network not available. Check your settings.");
	};
	
};

exports.netCheck = netCheck;