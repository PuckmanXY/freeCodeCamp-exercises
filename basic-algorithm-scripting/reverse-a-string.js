function reverseString(str) {
  var reversedStr = '';
  
  for (var i=0; i<str.length; i++){
    reversedStr+=str[str.length-i-1];
  }
  
  return reversedStr;
}

reverseString("hello");
