// Fred Strout
// ASD 1410
// CCandOOP
// 10/22/2014

//var runSave = require("save");

var DBdata = function(dataInfo){
	this.title = dataInfo.title;
	this.author = dataInfo.author;
	
	var db = Ti.Database.open("localDB");
	var row = db.execute('INSERT INTO tblData (Data) VALUES(?)', JSON.stringify(this));
	db.close();
};

exports.Data = DBdata;

//Ti.Database.install("/database/local.sqlite", "localDB");

var installData = function (e){
	
	// Allow the user to scroll through the data.
	var scrollIt = Ti.UI.createScrollView({
		layout: "vertical",
		scrollType: "vertical",
		contentWidth: "100%",
		showVerticalScrollIndicator: true,
		top: 15,
		bottom: 15
	});

	// console.log(e);
	
	// Loop through the data in put it inside an object
	for(i=0, j=e.length; i<j; i++){
		//console.log("New Record "+e[i].title);
		//console.log("Authored By "+e[i].author);
		var dataInfo = new DBdata(e[i]);
		//console.log(dataInfo);
	};
	// console.log(dataInfo);
	
	var db = Ti.Database.open("localDB");
	var getData = db.execute('SELECT * FROM tblData');
	while(getData.isValidRow()){
		var theData = JSON.parse(getData.fieldByName('Data'));
		//console.log(theData);
		
		// Create a Label object to display the title data retrieved from the database
		var titleLabel = Ti.UI.createLabel({
			text: "From the database: "+theData.title,
			title: theData.title,
			author: theData.author,
			color: "#000",
			font: {fontSize: 16, fontStyle: "Helvitica Neue"},
			top: 8,
			left: 7,
			right: 7
		});
		
		titleLabel.addEventListener("click", function(e){
			
			var dialog = Ti.UI.createAlertDialog({
				cancel: 2,
				buttonNames:["Save", "Favorite", "Cancel"],
				title: "Save Data"
			});
			dialog.addEventListener("click", function(event){
				if (event.index === 0){
					runSave.create(e.source.title, e.source.author, "No");
				};
				if (event.index === 1){
					runSave.create(e.source.title, e.source.author, "Yes");
				};
			});
			dialog.show();
		});
		
		// Create an Image View object to display the author data retrieved from the database
		var authorLabel = Ti.UI.createLabel ({
			text: theData.author,
			color: "#000",
			font: {fontSize: 12, fontStyle: "Helvitica Neue"},
			top: 1,
			left: 12,
			right: 7
		});
		
		// Create a line to seperate the records
		var line = Ti.UI.createView({
			backgroundColor: "#000",
			top: 2, left: 3, right: 3,
			height: 1
		});
		// Add the displayData objects to the Scroll View
		scrollIt.add(titleLabel, authorLabel, line);
		getData.next();
	};
	winLocal.add(scrollIt);
	getData.close();
	db.close();
};

exports.installData = installData;