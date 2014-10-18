// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

Ti.Database.install("/database/mainDB.sqlite", "infoDB");
var getNew = require("new");

var tblOpportunities = [];

var read = function(){
	var db1 = Ti.Database.open("infoDB");
	db1.execute("CREATE TABLE IF NOT EXISTS opportunities (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promise TEXT)");
	var db1Rows = db1.execute("SELECT id, customer, date, store, manager, problem, promise FROM opportunities");
	while (db1Rows.isValidRow()){
		tblOpportunities.push({
			id: db1Rows.fieldByName("id"),
			customer: db1Rows.fieldByName("customer"),
			date: db1Rows.fieldByName("date"),
			store: db1Rows.fieldByName("store"),
			manager: db1Rows.fieldByName("manager"),
			problem: db1Rows.fieldByName("problem"),
			promise: db1Rows.fieldByName("promise")
		});
		db1Rows.next();
	}
	db1Rows.close();
	db1.close();
};
exports.read = read;

var create = function (p1, p2, p3, p4, p5, p6){
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(p4);
	console.log(p5);
	console.log(p6);
	
	var db1 = Ti.Database.open("infoDB");
	db1.execute("CREATE TABLE IF NOT EXISTS opportunities (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promised TEXT)");
	db1.execute("INSERT INTO opportunities (customer, date, store, manager, problem, promise) VALUES (?, ?, ?, ?, ?, ?)", p1, p2, p3, p4, p5, p6);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tblOpportunities = [];
	read();
	getNew.addRow(rowID);
};
exports.create = create;

var update = function (p1, p2, p3, p4, p5, p6, p7){
	console.log("p1: "+p1);
	console.log("p2: "+p2);
	console.log("p3: "+p3);
	console.log("p4: "+p4);
	console.log("p5: "+p5);
	console.log("p6: "+p6);
	console.log("p7: "+p7);
	
	var db1 = Ti.Database.open("infoDB");
	db1.execute("UPDATE opportunities SET customer=?, date=?, store=?, manager=?, problem=?, promise=? WHERE id=?", p1, p2, p3, p4, p5, p6, p7);
	db1.close();
	tblOpportunities = [];
	read();
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
