
function countWords(){
var wordCount = ($('#user-text').val().split(' ').length);
 return wordCount;
}

function averageWords(){
  var average = $('#user-text').val().length /  $('#user-text').val().split(' ').length 
  return average;
  }

function uniqueWords() {
  var avgarray = [];
  var unique = [];
  avgarray.push($('#user-text').val().split(' ').length)
  for (var i = 0; i <= $('#user-text').val().length; i++) {
    if (avgarray[i] !== $('#user-text').val().split(' ').length[i]) {
      unique.push(i);
      return unique;
}}}
$('button').on('click', function() {
  event.preventDefault();
  $('.text-report').toggleClass('hidden');
  $('.text-report dd:first').text(countWords());
  $('.1').text(uniqueWords());
  $('.2').text(averageWords());
  
  
})
  

  
