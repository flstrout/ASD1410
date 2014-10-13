// Fred Strout
// ASD-1410
// SQLite
// 10/12/2014

Ti.Database.install("/database/mainDB.sqlite", "infoDB");

var tblOpportunities = [];

var read = function(){
	var db1 = Ti.Database.open("infoDB");
	db1.execute("CREATE TABLE IF NOT EXISTS opportunities (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, WWW TEXT, promised TEXT, MIR TEXT, dateMIR TEXT, mgrMIR TEXT)");
	var db1Rows = db1.execute("SELECT id, customer, date, store, manager, WWW, promised, MIR, dateMIR, mgrMIR FROM opportunities");
	while (db1Rows.isValidRow()){
		tblOpportunities.push({
			id: db1Rows.fieldByName("id"),
			customer: db1Rows.fieldByName("customer"),
			date: db1Rows.fieldByName("date"),
			store: db1Rows.fieldByName("store"),
			manager: db1Rows.fieldByName("manager"),
			problem: db1Rows.fieldByName("WWW"),
			promised: db1Rows.fieldByName("promised"),
			bolMakeItRight: db1Rows.fieldByName("MIR"),
			dateMakeItRight: db1Rows.fieldByName("dateMIR"),
			mgrMakeItRight: db1Rows.fieldByName("mgrMIR")
		});
		db1Rows.next();
	}
	db1Rows.close();
	db1.close();
};
read();
console.log(tblOpportunities);