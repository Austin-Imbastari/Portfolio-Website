var texts = new Array();
texts.push("Programmer");
texts.push("Web Developer");
texts.push("Software Engineer");
texts.push("Music Producer");
texts.push("Creator");

var point = 0;

function changeText(){
  document.getElementById('austin-pro').innerHTML = texts[point];
  if(point < ( texts.length - 1 ) ){
    point++;
  }else{
    point = 0;
  }
}

setInterval(changeText, 2000);
changeText();
