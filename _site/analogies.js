//ApplicationID, JavaScript Key
Parse.initialize("OewNDg3ea25QQf3Nzg8nnS1sux0KlgviJK3SB8c1", "WLjv5CwGASQf9pONJqD2wK2md1QXiFyWvEi2Txsr");

var Analogy		= Parse.Object.extend("Analogies");
var query 		= new Parse.Query(Analogy);

query.descending('createdAt');

var AnalogyCollection = Parse.Collection.extend({
	model: Analogy,
	query: query
});

var analogiesCollection = new AnalogyCollection();

analogiesCollection.fetch().then(function(collection) {
	var analogies = collection.toJSON();

	html = "";
	for(var i = 0; i < analogies.length; i++) {

		if (analogies[i].name == "") {
			analogies[i].name = "- anonymous"
		} else {
			analogies[i].name = "- " + analogies[i].name	
		}
		
		html += '<li><span class="arrows listStuff">&#11014;&#11015;</span>' + 
			'<span class="titlefont">' +
			analogies[i].firstWord + '</span>is to' + 
      		'<span class="titlefont">' + 
      		analogies[i].lastWord + '</span>' +
      		'<span class="name listStuff">' +
      		analogies[i].name + '</span></li>';
	}

	$('#comparisons').html(html);
});

/* alpha-only code by rybo111 on stackoverflow 
 * http://stackoverflow.com/questions/2980038/allow-text-box-only-for-letters-using-jquery
 */
$(".js-alpha-only").on("keydown", function(event){
  // Ignore controls such as backspace
  var arr = [8,16,17,20,35,36,37,38,39,40,45,46];

  // Allow letters
  for(var i = 65; i <= 90; i++){
    arr.push(i);
  }

  if(jQuery.inArray(event.which, arr) === -1){
    event.preventDefault();
  }
});

$(".js-wordInput").on("input", function(){
    var regexp = /[^a-zA-Z]/g;
    if($(this).val().match(regexp)){
      $(this).val( $(this).val().replace(regexp,'') );
    }
});


/* loop through lastwords 
 * check if lastWord == any of those 
 */
analogiesCollection.fetch().then(function(collection) {
	var analogies = collection.toJSON();

	$("#lastWord").on("keyup", function(e) {
		for(var i = 0; i < analogies.length; i++) {
			if ($('#lastWord').val() == analogies[i].lastWord) {
				console.log("Looks like we've got a dupe.");
				$('.compare-submit').attr('disabled', true);
				$('#alert').show().slideDown();
			} 
		}
	});
});



// ensure first word is part of second word before enabling submit
// first two words are required && 2nd word contains 1st word
$("#lastWord").on("keyup", function (e){
	var firstWord = $('#firstWord').val();
	var lastWord =  $('#lastWord').val();
	
	if((lastWord.toLowerCase().indexOf(firstWord.toLowerCase()) >= 0) && 
		(firstWord.length > 1) && (firstWord.length > 1) && 
		(lastWord.length > firstWord.length)) {
		$('.compare-submit').attr('disabled', false);
		$('#alert').hide().slideUp();
	} else {
		$('.compare-submit').attr('disabled', true);
		// $('#alert').show().slideDown();
	}

});


$('.compare-submit').click(function(e){
	e.preventDefault();
	var firstWord = $('#firstWord').val();
	var lastWord =  $('#lastWord').val();
	$('#alert').hide().slideUp();

	if(true) {
		var newAnalogy = new Analogy({
			firstWord: $('#firstWord').val().toLowerCase(),
			lastWord: $('#lastWord').val().toLowerCase(),
			name: $('#name').val(),
		});

		newAnalogy.save(null, {
			success: function(newAnalogy) {				
				$('#comparisons').prepend('<li><span class="titlefont">' +
				newAnalogy.get('firstWord') + '</span>is to<span class="titlefont">' + 
	      		newAnalogy.get('lastWord') + '</span></li>');
			},
			error: function(newAnalogy, error) {
				console.log("Error: " + error);
			}
		});	
	} else {
		console.log("entry didn't meet reqs");
		$('#alert').show().slideDown();
	}	
})






