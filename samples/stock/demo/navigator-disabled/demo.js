$(function() {
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {

		// Create the chart
		$('#container').highcharts('StockChart', {
			

			rangeSelector : {
				inputEnabled: $('#container').width() > 480,
				selected : 1
			},

			title : {
				text : 'AAPL Stock Price'
			},

			navigator : {
				enabled : false
			},

			series : [{
				name : 'AAPL Stock Price',
				data : data,
				tooltip: {
					valueDecimals: 2
				}
			}]
		});
	});
});
