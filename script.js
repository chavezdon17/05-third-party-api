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
var textDivArray = $('.textDiv');

var backgroundColor = moment().format('h a');
var cHour = moment().format('h a');
for(var i = 1; i <10; i++) {
  var timeId = '#time'+i
  if($(timeId).val()===cHour){
    $(timeId).attr('class', 'col-md-1 present')
  }
  else if (($(timeId).val()<cHour))
  var todo = cHour[i];
}

init()
function init(){
  var currentHour = JSON.parse(localStorage.getItem("current-hour"))

  if (currentHour !== null) {
    todos = currentHour;
  }
}

renderTodos();
function storeTime(){
  localStorage.getItem("current")
}
$('#save').on('click', function() {
});

function renderTodos(){
  for(var i = 0; i < currentHour.length; i++) {
    var todo = currentHour[i];
  
    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-hour", i);
  
    var button = document.createElement("button");
    button.textContent = "Save-Here";
   }
  }