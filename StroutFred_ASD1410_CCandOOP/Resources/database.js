// Fred Strout
// ASD 1410
// CCandOOP
// 10/22/2014

Ti.Database.install("/database/local.sqlite", "localDB");

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
	// console.log(e);
	for(i=0, j=e.length; i<j; i++){
		//console.log("New Record "+e[i].title);
		//console.log("Authored By "+e[i].author);
		var dataInfo = new DBdata(e[i]);
		//console.log(dataInfo);
	};
	console.log(dataInfo);
	var db = Ti.Database.open("localDB");
	var getData = db.execute('SELECT * FROM tblData');
	while(getData.isValidRow()){
		var theData = JSON.parse(getData.fieldByName('Data'));
		console.log(theData);
		getData.next();
	};
	getData.close();
	db.close();
};
exports.installData = installData;