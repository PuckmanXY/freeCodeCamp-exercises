function factorialize(num) {
  var i = 1;
  var result=1;
  while(i<=num){
      result*=i;
      i++;
    }
  return result;
}

factorialize(5);