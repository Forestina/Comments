/*
 * @Author: Mei Zhang micpearl@163.com
 * @Date: 2023-03-02 12:53:53
 * @LastEditors: Mei Zhang micpearl@163.com
 * @LastEditTime: 2023-03-02 13:40:29
 * @FilePath: \Comments\sketch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let CanvasWidth = 500;
let CanvasHight = 500;
let panelR = CanvasWidth / 1.5;
let sCtr, mCtr, hCtr;
let inputX=200,inputY=200;
let myComment='Please input your comment';


//html
let canvas;
let button;
let slider;

let displayState = 0;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  frameRate(20);

  background(0);

  
////////////
  fill(19, 31, 37);
  stroke(126, 178, 204);

  ////////////


  rectMode(CENTER);

  addGUI();
  
  inputSettings();
}

function draw() {
  
}
function inputSettings(){
  let inp = createInput('Please input your comment','text');
  inp.position(inputX, inputY);
  inp.size(500);
  inp.input(myInputEvent);
}
function myInputEvent() {
  console.log('you are typing: ', this.value());
}
function addGUI() {
  //add a slider
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  //add a button
  if (displayState == 0) {
    button = createButton("Add comment");
  } else if (displayState == 1) {
    button = createButton("Add comment1");
  }


  button.addClass("button");
  //Add the play button to the parent gui HTML element
  button.parent("gui-container");

  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress());

}

function handleButtonPress() {

  if (displayState < 10) {
    displayState++;
  } else {
    displayState = 0;
  }
  //console.log('ok');
 /// printComment(myComment);
  button.html("Add comment");

}
function printComment(myComment){
  console.log(myComment);
  textSize(20);
  textWrap(WORD);
  text(myComment, CanvasWidth - 80, CanvasHight - 50, 100);
  
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}