$(document).ready(function(){

var topics = ["Lebron James", "Paul George","John Wall","Kevin Durant","Stephen Curry","Kobe Bryant","Carmelo Anthony","Micheal Jordan", "Larry Bird", "Magic Johnson"];

function createplayerbuttons (){

	$('#Basketball-PlayerButtons').empty();
	
	for (i = 0; i < topics.length; i++) {
		var playerButton = $('<button>');
		playerButton.attr('data-playernames', topics[i]);
		// pulls style from bootstrap to style the buttons
		playerButton.addClass('btn btn-default btnplayer');
		playerButton.text(topics[i]);
		$("#Basketball-PlayerButtons").append(playerButton);
	}
}

createplayerbuttons(); 

	$("#Basketball-PlayerButtons").animate({
		padding: "10px",
	});
});

	