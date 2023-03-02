let canvasWidth = 500;
let canvasHight = 500;
let panelR = canvasWidth / 1.5;
let sCtr, mCtr, hCtr;

let inputX=200,inputY=200;
let myComment='Please input your comment';

//html
let canvas;
let button;

let displayState = 0;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  frameRate(20);

  background(0);

  rectMode(CENTER);

  addGUI();

  fill(19, 31, 37);
  stroke(126, 178, 204);
  inputSettings();
}
function inputSettings(){
  let inp = createInput('Please input your comment','text');
  inp.position(inputX, inputY);
  inp.size(500);
  inp.input(myInputEvent);
}
function myInputEvent() {
  myComment=this.value();
}

function addGUI() {
  
  //add a button
  if (displayState == 0) {
    button = createButton("Add comment");
  } else if (displayState == 1) {
    button = createButton("Add comment");
  }

  button.addClass("button");
  //Add the play button to the parent gui HTML element
  button.parent("gui-container");

  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress);

}


function handleButtonPress() {

  if (displayState < 10) {
    displayState++;
  } else {
    displayState = 0;
  }

  if (displayState == 0) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,0);


  } else if (displayState == 1) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,1);
    
  }
  else if (displayState == 2) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,2);
    
  }
  else if (displayState == 3) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,3);
    
  }
  else if (displayState == 4) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,4);
    
  }
  else if (displayState == 5) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,5);
    
  }
  else if (displayState == 6) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,6);
    
  }
  else if (displayState == 7) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,7);
    
  }
  else if (displayState == 8) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,8);
    
  }
  else if (displayState == 9) {
    button.html("Add comment");

    console.log(myComment);
    myCommentProcess(myComment,9);
    
  }

  
}
function myCommentProcess(displayText,num){
 
    let fontSize = map(displayText.length,0,200,30,20,true);
    textSize(fontSize);
    textWrap(WORD);
    textAlign(CENTER);
    text(displayText,300, 300+50*num, 1000);

  
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}