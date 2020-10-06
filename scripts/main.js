let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');


function setUserName(){
  let myName = prompt('please enter your name.');
  if(!myName || myName === null){
    setUserName();
  }else{
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
if(!sessionStorage.getItem('name')){
  setUserName();
}else{
  let storedName = sessionStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function(){
  setUserName();
}

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
      myImage.setAttribute('src', 'images/firefox2.png');
    }else{
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}