
function palindrome(str) {
    var count = 0;
    var newString = str.replace(/ˆ0-9a-z/gi, '').toLowerCase();
    for (var i = 0; i < newString.length/2; i++) {
        if (newString[i] == newString[newString.length - i - 1]) {
            count++;
        }
    }
    if (count == Math.round(newString.length / 2)) 
        return true;
    else
        return false;
}  

palindrome("eye");
