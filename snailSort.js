/*
Snail Sort
----------
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/
snail = function(arr) {
var start = new Date().getTime();
  console.log(arr);
  if(arr==undefined) {
    arr = [[1,2,3],[4,5,6],[7,8,9]];
  }
  else if(arr.length==1&&arr[0].length==0) {
    return [];
  }
  else if(arr.length==1&&arr[0].length==1) {
    res = [];
    res.push(arr[0][0]);
    return res;
  }
  iMin=0;
  iMax=arr.length-1;
  jMin=0;
  jMax=arr.length-1;
  res=[];
  k = 0;
  l = 0;
  if(iMax%2==0) {
    while(iMin!=iMax) {
      for(k=jMin; k<=jMax; k++) {
        res.push(arr[iMin][k]);
      }
      for(l=iMin+1;l<=iMax;l++) {
        res.push(arr[l][jMax]);
      }
      for(k=jMax-1;k>=jMin; k--) {
        res.push(arr[iMax][k]);
      }
      for(l=iMax-1;l>=iMin+1;l--) {
        res.push(arr[l][jMin]);
      }
      iMin++;
      iMax--;
      jMin++;
      jMax--;
    }
    res.push(arr[iMin][jMin]);
    return res;
  }
  else {
    while(iMin!=iMax-1) {
      for(k=jMin; k<=jMax; k++) {
        res.push(arr[iMin][k]);
      }
      for(l=iMin+1;l<=iMax;l++) {
        res.push(arr[l][jMax]);
      }
      for(k=jMax-1;k>=jMin; k--) {
        res.push(arr[iMax][k]);
      }
      for(l=iMax-1;l>=iMin+1;l--) {
        res.push(arr[l][jMin]);
      }
      iMin++;
      iMax--;
      jMin++;
      jMax--;
    }
    res.push(arr[iMin][jMin]);
    res.push(arr[iMin][jMax]);
    res.push(arr[iMax][jMax]);
    res.push(arr[iMax][jMin]);
    return res;
  }
}
