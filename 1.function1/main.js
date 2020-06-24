function reverseString(message){
  // wirte your code here
  return message.split('').reverse().join(''); 
}
var str = reverseString('hello'); // should return 'olleh'
console.log(str);