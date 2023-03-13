var currentTimeDisplay = $('#currentDay');
currentTimeDisplay.text(moment().format('1111'));

var hourNine = $('#hour-9');
var hourTen = $("#hour-10");
var hourEleven = $("#hour-11");
var hourTwelve = $("#hour-12");
var hourThirteen = $("#hour-13");
var hourFourteen = $("#hour-14");
var hourFithteen = $("#hour-15");
var hourSixteen = $('#hour-16');
var hourSeventeen = $('#hour-17');


var saveBtn = $(".saveBtn");


saveBtn.on("click", function(e) {
    e.preventDefault();
    hourNineVal = hourNine.val();
    hourTenVal = hourTen.val();
    hourElevenVal = hourEleven.val();
    hourTwelveVal =  hourTwelve.val();
    hourThirteenVal = hourThirteen.val(); 
    hourFourteenVal = hourFourteen.val(); 
    hourFifteenVal = hourFifteen.val();
    hourSixteenVal = hourSixteen.val();
    hourSeventeenVal = hourSeventeen.val();
    localStorage.setItem("hour09", hourNineVal);
    localStorage.setItem("hour10", hourTenVal);
    localStorage.setItem("hour11", hourElevenVal);
    localStorage.setItem("hour12", hourTwelveVal);
    localStorage.setItem("hour13", hourThirteenVal);
    localStorage.setItem("hour14", hourFourteenVal);
    localStorage.setItem("hour15", hourFifteenVal);
    localStorage.setItem("hour16", hourSixteenVal);
    localStorage.setItem("hour17", hourSeventeenVal);
});