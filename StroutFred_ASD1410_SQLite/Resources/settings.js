// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

// Define Settings Variables and Set Initial Values
var mgrName = "";
if (Ti.App.Properties.getString("name") === null){
	mgrName = Ti.App.Properties.setString("name", "Manager's Full Name");
} else {
	mgrName = Ti.App.Properties.getString("name");
};

var mgrPos = "";
if (Ti.App.Properties.getString("position") === null){
	mgrPos = Ti.App.Properties.setString("position", "Manager's Position");
} else {
	mgrPos = Ti.App.Properties.getString("position");
};

var homeStore = "";
if (Ti.App.Properties.getString("store") === null){
	homeStore = Ti.App.Properties.setString("store", "National Store No.");
} else {
	homeStore = Ti.App.Properties.getString("store");
};

console.log(mgrName);
console.log(mgrPos);
console.log(homeStore);