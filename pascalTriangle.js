/*
Pascal's Triangle
-----------------

Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

For example:
pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/
function fact(n) {
	if(n==0) {
  	return 1;
  }
  else if(n==1) {
    return 1;
  }
  else{
    return n*fact(n-1);
  }
}

function c(n,k) {
  return Math.round((fact(n)/(fact(n-k)*fact(k))));
}

function pascalsTriangle(n) {
  i = 0;
  j = 0;
	var pascalMatrix = [];
  res = [];
  for(i=0;i<n;i++) {
  	pascalMatrix[i]=[];
  }
  for(i=0;i<n;i++) {
    for(j=0;j<=i;j++) {
      pascalMatrix[i][j] = c(i,j);
    }
  }
  console.log(pascalMatrix);
  pascalMatrix.forEach(function(arr) {
  	arr.forEach(function(element) {
    	res.push(element);
    })
  })
  console.log(res);
  return(res);
}
