$(document).ready(function(){
	var dateArr = ['12/24/2016', '12/27/2016', '12/28/2016', '1/3/2017','1/5/2017', '1/15/2017' , '1/23/2017', '2/4/2017'];
	var today = new Date();
	var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
	
	var lastArrDate = new Date(dateArr[dateArr.length-1]);
	
	var MonthLast = new Date(lastArrDate.getFullYear(), lastArrDate.getMonth() + 1, 0);
	
	
	var d = firstDay.getDate();
	var m = firstDay.getMonth()+1;
	var y = firstDay.getFullYear();
	var dateItr = m+'/'+d+'/'+y;
	
	var calenDate = firstDay;
	var badDates = [];
	
	
	
	/*var lastWalkinDate = dateArr[i-1];*/

	var i = 0;
	var j = 0;
	for (i = 0; i < dateArr.length;) {
		if (dateItr != dateArr[i]) {
			badDates.push(dateItr);
			//console.log(dateItr);
			calenDate.setDate(calenDate.getDate() + 1);
			var d = calenDate.getDate();
			var m = calenDate.getMonth()+1;
			var y = calenDate.getFullYear();
			var dateItr = m+'/'+d+'/'+y;
			
		} else {
			calenDate.setDate(calenDate.getDate() + 1);
			var d = calenDate.getDate();
			var m = calenDate.getMonth()+1;
			var y = calenDate.getFullYear();
			var dateItr = m+'/'+d+'/'+y;
			i++;
		}
	}
	console.log(dateItr);

	var srtMonthLast = MonthLast.getMonth() + 1 + '/' + MonthLast.getDate() + '/' + MonthLast.getFullYear();
	console.log(srtMonthLast);

	while (dateItr != srtMonthLast) {
		badDates.push(dateItr);
		calenDate.setDate(calenDate.getDate() + 1);
		var d = calenDate.getDate();
		var m = calenDate.getMonth()+1;
		var y = calenDate.getFullYear();
		var dateItr = m+'/'+d+'/'+y;
	}
	badDates.push(dateItr);
	console.log(badDates);

	
	var m = 0;
	RealDay = new Date();
	var firstDay = new Date(RealDay.getFullYear(), RealDay.getMonth(), 1);
	


	$("#datepick").datepicker({
		weekStart : 1,
		beforeShowDay: function (date){
					/*console.log(date);*/
                  	if (date < firstDay || date > MonthLast) {
                  		return {
                  			classes: 'oldDates'
                  		}		
                	}
            	},
        datesDisabled: badDates,
	});	
	
})
