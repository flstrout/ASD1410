// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

Ti.Database.install("/database/mainDB.sqlite", "infoDB");
var getNew = require("new");

var tblOpportunities = [];

var read = function(){
	var db1 = Ti.Database.open("infoDB");
	db1.execute("CREATE TABLE IF NOT EXISTS opportunities (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, WWW TEXT, promised TEXT, MIR TEXT, dateMIR TEXT, mgrMIR TEXT)");
	var db1Rows = db1.execute("SELECT id, customer, date, store, manager, WWW, promised, MIR, dateMIR, mgrMIR FROM opportunities");
	while (db1Rows.isValidRow()){
		tblOpportunities.push({
			id: db1Rows.fieldByName("id"),
			Customer: db1Rows.fieldByName("customer"),
			DateCreated: db1Rows.fieldByName("date"),
			store: db1Rows.fieldByName("store"),
			PromisedBy: db1Rows.fieldByName("manager"),
			Opportunity: db1Rows.fieldByName("WWW"),
			Promise: db1Rows.fieldByName("promised"),
			bolMakeItRight: db1Rows.fieldByName("MIR"),
			dateMakeItRight: db1Rows.fieldByName("dateMIR"),
			mgrMakeItRight: db1Rows.fieldByName("mgrMIR")
		});
		db1Rows.next();
	}
	db1Rows.close();
	db1.close();
};
exports.read = read;

var create = function (customer, problem, promised, date, manager, store){
	var db1 = Ti.Database.open("infoDB");
	db1.execute("CREATE TABLE IF NOT EXISTS opportunities (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, WWW TEXT, promised TEXT, MIR TEXT, dateMIR TEXT, mgrMIR TEXT)");
	db1.execute("INSERT INTO opportunities (customer, WWW, promised, date, manager, store) VALUE (?, ?, ?, ?, ?, ?)", customer, problem, promised, date, manager, store);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tblOpportunities = [];
};
exports.create = create;

var update = function (){
	console.log(getNew.customer);
	console.log(getNew.problem);
	console.log(getNew.promise);
	console.log(getNew.rowID);
	/*var db1 = Ti.Database.open("infoDB");
	db1.execute("UPDATE opportunities SET customer=getNew.customer, WWW=getNew.problem, promised=getNew.promise WHERE id=getNew.rowID");
	db1.close();
	tblOpportunities = [];
	read();*/
};
exports.update = update;

var del = function(id){
	var db1 = Ti.Database.open("infoDB");
	db1.execute("DELETE FROM opportunities WHERE id=?", id);
	db1.close();
	tblOpportunities = [];
	read();
};
exports.del = del;

exports.tblOpportunities = tblOpportunities;
//console.log(tblOpportunities);
