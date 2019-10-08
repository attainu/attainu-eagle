$(document).ready(function() {
	console.log("App is ready!");

	// Listen to the click event on "Search" button
	$('#process-search').on('click', function() {
		// Get search query from the input box
		var query = $('#search-query').val();

		var duckDuckGoURL = "https://api.duckduckgo.com";

		var queryParameters = {
			q: query,
			format: "json",
			pretty: 1
		};

		// Get result from DuckDuckGo via ajax
		$.getJSON(duckDuckGoURL, queryParameters, function(searchData) {
			var results = searchData.RelatedTopics;

			results = results.filter(function(value) {
				return value.Text && value.FirstURL;
			});

			var searchResultWrapperElem = $('#search-result-data');
			searchResultWrapperElem.empty();

			// Check if there are enough results to display
			if(results.length === 0) {
				var noResult = $('<span/>').text("-- No result found --").css({
					"text-align": "center"
				});

				noResult.appendTo(searchResultWrapperElem);

				$('.search-result').show();

				return;
			}

			results.forEach(function(value, index) {
				var liElem = $('<li/>');
				
				var resultTitleElem = $('<p/>').text(value.Text);
				// <p>Some text</p>

				var resultURLElem = $('<span/>').text(value.FirstURL);
				// <span>wikipedia.com/wefwef</span>

				var anchorElem = $('<a/>').attr({
					href: value.FirstURL,
					target: "_blank"
				});
				// <a href="wikipedia.com/wefwef"></a>

				resultTitleElem.appendTo(anchorElem);
				resultURLElem.appendTo(anchorElem);
				// <a href="wikipedia.com/wefwef">
				//	<p>Some text</p>
				//	<span>wikipedia.com/wefwef</span>
				// </a>

				anchorElem.appendTo(liElem);
				// <li>
				// 	<a href="wikipedia.com/wefwef">
				//		<p>Some text</p>
				//		<span>wikipedia.com/wefwef</span>
				// 	</a>
				// </li>

				liElem.appendTo(searchResultWrapperElem);
			});

			$('.search-result').show();
		});
	});

	
});