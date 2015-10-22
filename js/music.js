// Initialize Parse app
Parse.initialize('Q4XaNGujOcjn2QvmRBHhHfr4JZHDWrd2eQlwdfhc', '93JLpixWkaLvs1YzyJjy8EbFiKxKakFWWtUAdEJT')
// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');
// Click event when form is submitted
$('form').submit(function() {
	// Create a new instance of your Music class 
	var instance = new Music();
	// For each input element, set a property of your new instance equal to the input's value
	$('#musicForm').find('input').each(function() {
		instance.set(this.id, this.value);
		this.value = '';
	});
	// After setting each property, save your new instance back to your database
	instance.save(null, {
		success:getData
	});	
	return false;
})
// Write a function to get data
var getData = function() {
	// Set up a new query for our Music class
	var query = new Parse.Query(Music);
	// Set a parameter for your query -- where the website property isn't missing
	query.notEqualTo('website', '')
	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
	query.find({
			success:function(results) {
				buildList(results);
			}
	})
}
// A function to build your list
var buildList = function(data) {
	// Empty out your ordered list
	$("ol").empty();	
	// Loop through your data, and pass each element to the addItem function
	data.forEach(function(d){
		addItem(d);
	})
}
// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
	var website = item.get('website')
	var band = item.get('band')
	var song = item.get('song')
	// Append li that includes text from the data item
	var li = $('ol').append('<li>' + band + ' ' + song + '<li>');
	var button = $('<button class="btn-danger btn-xs">Remove</button>');
	button.click(function(){
		item.destroy({
			success:getData
		})
	})
	li.append(button);
	$('ol').append(li);
	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads
getData();

