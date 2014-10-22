// Fred Strout
// ASD 1410
// CC and OOP
// 10/22/2014

// Allow the user to scroll through the data.
var scrollIt = Ti.UI.createScrollView({
	layout: "vertical",
	scrollType: "vertical",
	contentWidth: "100%",
	showVerticalScrollIndicator: true,
	top: 15,
	bottom: 15
});

// Loop through the retrieved data and create objects to display it
var displayData = function(d){
	// console.log(d);
	for(i=0, j=d.length; i<j; i++){
		
		// Create a Label object to display the title data retrieved from the remote source
		var titleLabel = Ti.UI.createLabel({
			text: d[i].title,
			color: "#000",
			font: {fontSize: 16, fontStyle: "Helvitica Neue"},
			top: 8,
			left: 7,
			right: 7
		});
		
		// Create an Image View object to display the picture data retrieved from the remote source
		var authorLabel = Ti.UI.createLabel ({
			text: d[i].author,
			color: "#000",
			font: {fontSize: 12, fontStyle: "Helvitica Neue"},
			top: 1,
			left: 12,
			right: 7
		});
		var line = Ti.UI.createView({
			backgroundColor: "#000",
			top: 2, left: 3, right: 3,
			height: 1
		});
		// Add the displayData objects to the Scroll View
		scrollIt.add(titleLabel, authorLabel, line);
	};
};

// Add the Scroll View to the targeted data view on the UI
winRemote.add(scrollIt);

exports.displayData = displayData;