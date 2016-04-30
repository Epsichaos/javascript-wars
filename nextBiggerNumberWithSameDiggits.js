
/*
Next bigger number with the same digits
---------------------------------------
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
function nextBigger(n){
  numberArray=n.toString().split('');
  arrayLength=numberArray.length;
  compare=Number(numberArray[0]);
  maxNumber = true;
  numberArray.forEach(function(element){
    if(Number(element) > compare) {
      maxNumber = false;
    }
    compare = Number(element);
  })
  //a bigger number does not exist
  if(maxNumber==true){
    return -1
  }
  //exists at least one bigger number
  else{
    i = n+1;
    stop = false;
    numberArray.sort()
    while(1){
      arr=i.toString().split('');
      arr.sort()
      if(JSON.stringify(arr)==JSON.stringify(numberArray)) {
        return i;
      }
      i++;
    }
  }
}
