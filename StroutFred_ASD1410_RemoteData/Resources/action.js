// Fred Strout
// ASD 1410
// Remote Data
// 10/8/14

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
			color: "#eee",
			font: {fontSize: 10, fontStyle: "Helvitica Neue"},
			top: 8,
			left: 7,
			right: 7
		});
		
		// Create an Image View object to display the picture data retrieved from the remote source
		var pictureImage = Ti.UI.createImageView ({
			top: 3,
			image: d[i].picture,
			height: 40
		});
		
		// Add the displayData objects to the Scroll View
		scrollIt.add(titleLabel, pictureImage);
	};
};

// Add the Scroll View to the targeted data view on the UI
graphic4.add(scrollIt);

exports.displayData = displayData;