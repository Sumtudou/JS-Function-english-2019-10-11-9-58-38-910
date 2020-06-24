
function countWords(message){
  // wirte your code here
  var arr  = message.split(" ");
  return arr.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
//console.log(countWords('Good morning, I love JavaScript.'));