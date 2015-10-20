// Initialize Parse app
Parse.initialize('Q4XaNGujOcjn2QvmRBHhHfr4JZHDWrd2eQlwdfhc', '93JLpixWkaLvs1YzyJjy8EbFiKxKakFWWtUAdEJT')

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// Create a new instance of your Music class 
// var sweetTune = new Music();

// // Set a property 'band' equal to a band name
// sweetTune.set('band', 'Coldplay')

// // Set a property 'website' equal to the band's website
// sweetTune.set('website', 'coldplay.com')

    
// // Set a property 'song' equal to a song
// sweetTune.set('song', 'Fix You')

// Save your instance of your song -- and go see it on parse.com!
// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var instance = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	var band = $('#band').val()
	var song = $('#song').val()
	var website = $('#website').val()
	
	instance.set('band', band)
	instance.set('website', song)
	instance.set('song', website)


	// After setting each property, save your new instance back to your database
	instance.save()
	
	//clear out
	$('#band').val('')
	$('#song').val('')
	$('#website').val('')	 
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


