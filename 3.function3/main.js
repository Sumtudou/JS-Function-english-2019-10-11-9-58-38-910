    function alphabetSort(message) {
        // wirte your code here
        var arr = message.split('');
        arr.sort();
        return arr.join('');
    }
    alphabetSort('hello'); // should return 'ehllo'
    //console.log(alphabetSort('hello'));