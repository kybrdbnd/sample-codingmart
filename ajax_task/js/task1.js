var path = 'https://gist.githubusercontent.com/anonymous/14a6b9d4dbe8279e11349c7580daa0c2/raw/d48ba8809191d551db2361be8560948e1dc18460/6bdc0c8a-cc03-11e6-b16a-73ee9417a971.json'
$(document).ready(function(){

	$.ajax({
		url: path,
		type: 'GET',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// data: {param1: 'value1'},
	})
	.done(function(msg) {
		msg = $.parseJSON(msg);
		console.log(msg);
		for(var i=0;i<msg.ResultSet.Result.length;i++){
			console.log(msg.ResultSet.Result[i])
		}
		
	})
	
});