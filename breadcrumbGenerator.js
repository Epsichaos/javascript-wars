/*
Breadcrumb Generator
--------------------
Description:

As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link doing the dirty work in my place.

What might not be so trivial is to get a decent breadcrumb from your current url: for this kata your purpose is to create a function that takes a url, strips the first part (labeling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

All elements need to be turned into uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper folder.

A few examples can be more helpful than thousands of explanations, so here you have them:

generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
Seems easy enough? Well, probably not, but we have now a last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; url composed of more words separated by -, but equal or less than 30 characters long, needs to be just uppercased with hyphens replaced by spaces.

Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

Examples:

generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.

If you like to test yourself with actual work/interview related kata, please also consider this one about building a string filter for Angular.js

Special thanks to the colleague that, seeing my code and commenting that I worked on that as if it was I was on CodeWars, made me realize that it could be indeed a good idea for a kata :)
*/
function parseLongString(str) {
  stringExcluded=["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
	res='';
  chn = str.replace('-',' ');
  chn = chn.split('.')[0];
  chn = chn.split('?')[0];
  chn = chn.split('#')[0];
  str=str.split('.')[0];
  str=str.split('?')[0];
  str=str.split('#')[0];
  if(chn.length>30) {
		strArray=str.split('-');
    strArray.forEach(function(strElement){
      isExcluded = false;
      stringExcluded.forEach(function(element){
        if(strElement===element) {
          isExcluded = true;
        }
      })
      if(!isExcluded) {
        //console.log(strElement[0] + 'is not excluded');
        res += strElement[0].toUpperCase();
      }
    })
  }
  else {
    res = str.toUpperCase();
  }
  j=0;
	while(j<str.split('-').length){
  	res=res.replace('-', ' ');
    j++;
  }
  res=res.split('?')[0];
  res=res.split('#')[0];
  return res;
}

function generateBC(url, separator) {
  urlArray=url.split('/');
  if(urlArray[0]==='http:' || urlArray[0]==='https:') {
    i = 2;
    tempArray = [];
    while(i<urlArray.length) {
      tempArray.push(urlArray[i]);
      i++;
    }
    urlArray = tempArray;
  }
  if(urlArray.length==1) {
    return '<span class="active">HOME</span>';
  }
  else if (urlArray.length==2&&(urlArray[1].split('.')[0]=='index'||urlArray[1]=='')) {
    return '<span class="active">HOME</span>';
  }
  else {
    dnsString = '<a href="/">HOME</a>'
    i=1;
    paramStringArray = [];
    res='';
    while(i<urlArray.length-1) {
      tempString = '<a href="/';
      k = 1;
      while(k<i) {
        tempString += urlArray[k] + '/';
        k++;
      }
      tempString += urlArray[i];
      tempString += '/">';
      tempString += parseLongString(urlArray[i]);
      tempString += '</a>';
      paramStringArray.push(tempString);
      i++;
    }
    lastStringArray = urlArray[i].split('.');
    if(lastStringArray[0] != 'index') {
      lastString = '<span class="active">' + parseLongString(lastStringArray[0]) + '</span>';
      res = dnsString + separator;
      paramStringArray.forEach(function(paramString) {
        res += paramString + separator;
      })
      res += lastString;
      return res;
    }
    else {
      res = dnsString + separator;
      j = 0;
      while(j<paramStringArray.length-1) {
         res += paramStringArray[j] + separator;
         j++;
      }
      res += '<span class="active">' + parseLongString(urlArray[j+1]) + '</span>';
      return res;
    }
  }
}
