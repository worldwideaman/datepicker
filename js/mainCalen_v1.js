$(document).ready(function() {
    var dateArr = ['12/24/2016', '12/27/2016', '12/28/2016', '01/23/2017'];
    var today = new Date();
    var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    var d = firstDay.getDate();
    var m = firstDay.getMonth() + 1;
    var y = firstDay.getFullYear();
    var dateItr = m + '/' + d + '/' + y;
 
 
    var calenDate = firstDay;
    var badDates = [];
 
    var i = 0;
    var j = 0;
    for (i = 0; i < dateArr.length;) {
        if (dateItr != dateArr[i]) {
            badDates.push(dateItr);
            //console.log(dateItr);
            calenDate.setDate(calenDate.getDate() + 1);
            var d = calenDate.getDate();
            var m = calenDate.getMonth() + 1;
            var y = calenDate.getFullYear();
            var dateItr = m + '/' + d + '/' + y;
 
        } else {
            calenDate.setDate(calenDate.getDate() + 1);
            var d = calenDate.getDate();
            var m = calenDate.getMonth() + 1;
            var y = calenDate.getFullYear();
            var dateItr = m + '/' + d + '/' + y;
            i++;
        }
    }
 
    /*var lastDate = calenDate.getDate();
    for (j = lastDate; j <= 31; j++) {
        badDates.push(dateItr);
        calenDate.setDate(calenDate.getDate() + 1);
        var d = calenDate.getDate();
        var m = calenDate.getMonth() + 1;
        var y = calenDate.getFullYear();
        var dateItr = m + '/' + d + '/' + y;
    }*/
    console.log(badDates);
    
    var m = 0;
    RealDay = new Date();

    var firstDay = new Date(RealDay.getFullYear(), RealDay.getMonth(), 1);
    var lastWalkDay = new Date(dateArr[i-1]);
    $("#datepick").datepicker({
        weekStart: 1,
        beforeShowDay: function(date) {
            if (date < firstDay) {
                return {
                    classes: 'oldDates'
                }
            }
        },

        datesDisabled: badDates,
    }).on('changeDate', function() {
        window.classScroll = $("td.active.day").html();
        console.log(window.classScroll);
        $.each($(".wlkDay"), function(i, v) {
            var monMatch = $(this).parent().find('.wlkMon span').html().slice(0, 3).toLowerCase() == $(".datepicker-switch").html().toLowerCase();
 
            if ($(v).html() == window.classScroll && monMatch) {
                scrollToClass(v);
            }
        })
    });
 
})