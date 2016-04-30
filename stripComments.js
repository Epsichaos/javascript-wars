/*
Strip Comments
--------------
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/
function inArray(char, arr) {
  search = false;
  arr.forEach(function(e) {
    if(char==e) {
      search = true;
    }
  })
  return search;
}

function solution(input, markers){
  commentMode = false;
  i = 0;
  res = '';
  str = input;
  while (i<str.length) {
    if(!commentMode) {
      if(!inArray(str[i],markers)) {
        if(!(str[i]==' '&&inArray(str[i+1],markers))) {
          res+=str[i];
        }
        i++;
      }
      else {
        commentMode = true;
        i++;
      }
    }
    else {
      if(str[i]=='\n') {
        res+='\n';
        commentMode = false;
      }
      i++;
    }
  }
  return res;
}
