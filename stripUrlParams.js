/*
Strip URL Params
----------------
Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/
function inArray(param, arr) {
  resp = false;
  arr.forEach(function(e) {
    if(param==e) {
      resp = true;
    }
  })
  return resp;
}

function stripUrlParams(url, paramsToStrip){
  paramsObj = {};
  res='';
  keyArray=[];
  str = url.split('?');
  // if there is no params, just return the website url
  if(str.length==1||(str.length==2&&str[1]=='')) {
    return str[0];
  }
  webSite = str[0];
  paramsString = str[1];
  paramsArray = paramsString.split('&');
  // if only first argument exists
  if(paramsToStrip==undefined||paramsToStrip.length==0) {
    paramsArray.forEach(function(p) {
      s = p.split('=');
      // if this argument has not been found yet
      if(paramsObj[s[0]]==undefined) {
        paramsObj[s[0]]=s[1];
        keyArray.push(s[0]);
      }
    })
    res+=webSite + '?';
    i = 0;
    keyArray.forEach(function(k) {
      res+=k+'='+paramsObj[k];
      i++;
      if(i<keyArray.length) {
        res+='&';
      }
    })
    return res;
  }
  // if second argument exists
  else {
    paramsArray.forEach(function(p) {
      s = p.split('=');
      // if this argument has not been found yet AND if it is not excluded by the second param
      if(paramsObj[s[0]]==undefined&&inArray(s[0],paramsToStrip)==false) {
        paramsObj[s[0]]=s[1];
        keyArray.push(s[0]);
      }
    })
    res+=webSite + '?';
    i = 0;
    keyArray.forEach(function(k) {
      res+=k+'='+paramsObj[k];
      i++;
      if(i<keyArray.length) {
        res+='&';
      }
    })
    return res;
  }
}
