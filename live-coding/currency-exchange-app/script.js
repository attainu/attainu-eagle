$(document).ready(function() {
	// Write your app logic below this line

	$('#convert-currency-btn').on('click', function() {
		// Get currency values from the dropdowns
		var currencyOne = $(".currency-one").val();
		var currencyTwo = $(".currency-two").val();

		// Validate if both the currencies are same
		// If they are same, throw an error
		if(currencyOne === currencyTwo) {
			alert("Please choose two different currencies!");
			return;
		}

		// Bind currency symbols in the result container right away
		$('#cr-one-symbol').text(currencyOne);
		$('#cr-two-symbol').text(currencyTwo);

		// Call ExhchangeRatesAPI server and get the currency conversion
		// for selected currencies
		$.get("https://api.exchangeratesapi.io/latest", {
			base: currencyOne,
			symbols: currencyTwo
		}, function(data) {
			// Limit the decimal value to be of only 2 integers long
			var convertedValue = data.rates[currencyTwo].toFixed(2);

			// Bind the currency count to the respective element
			$('#cr-two-count').text(convertedValue);

			// Finally, show the result (Result elem is hidden by default)
			$('#result').fadeIn(400);
		});
	});
});