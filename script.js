workHours = {
  "8 AM": "",
  "9 AM": "",
  "10 AM": "",
  "11 AM": "",
  "12 AM": "",
  "1 PM": "",
  "2 PM": "",
  "3 PM": "",
  "4 PM": "",
  "5 PM": "",
};
//current hour
var cHour = moment().format('HH');
var currentTimeInt = parseInt(cHour);


var timeEachHour = moment()
var textDivArray = $('.hourRow');

//changing background color
$('.hourRow').each(function() {
  var timeId = parseInt($(this).attr('id').split('y')[1])
  
  if(timeId === cHour)
  {
    $(this).addClass('present')
  }
  else if (timeId < cHour){
    $(this).addClass('past')
  }
else if (cHour < timeId){
  $(this).addClass('future')

}
}) 
 for (i = 8; i < 18; i++){
   var data = localStorage.getItem(i)
 
   var textDiv = '#text-entry' + i
   console.log(textDiv)
   $(textDiv).text(data)
 }


//click function 
$('button').on('click', function() {
  var value = $(this).siblings('textArea').val();
 var hourClick = $(this).siblings('div').attr('id').split('e')[1]
  localStorage.setItem(hourClick, value)

});

