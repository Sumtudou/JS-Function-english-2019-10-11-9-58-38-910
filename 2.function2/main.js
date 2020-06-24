function reverseString(message) {
	return message.split('').reverse().join('');
}

function palindrome(message) {
	if (message === reverseString(message)) {
		return true;
	}
	return false;
}
//console.log(palindrome('hello'));
//console.log(palindrome('abcba'));
palindrome('hello'); // should return false
palindrome('abcba'); // should return true