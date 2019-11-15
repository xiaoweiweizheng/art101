let loadingButton;
let likeButton = [];
let textInput = [];
let addButton = [];
let firstTime = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  loadingButton = select('#loadingButton');
  loadingButton.mousePressed(createLikeButton);
  textSize(100);
}

function draw() {

}

function createLikeButton(){
if(firstTime){
  for (i = 0; i < 50; i ++){
    likeButton[i] = createButton("like");
    likeButton[i].position(random(windowWidth), random(windowHeight));
    likeButton[i].mousePressed(createShareButton);
  } firstTime = false;
} else {
  window.location.href= 'pageNoFound.html'
}

}

function createShareButton() {
  let shareButton = createButton("share");
  shareButton.mousePressed(createCommentsButton);
  shareButton.position(random(windowWidth), random(windowHeight));
}

function createCommentsButton() {
  let commentsButton = createButton("comment");
  commentsButton.mousePressed(createTextInput);
  commentsButton.position(random(windowWidth), random(windowHeight));

}

function createTextInput() {
  let x = random(windowWidth);
  let y = random(windowHeight);
  textInput.push(createInput().position(x, y));
  addButton.push(createButton("add").position(x+135, y));

  for (let i = 0; i < textInput.length; i++){
    addButton[i].mousePressed(function(){
    console.log(textInput[i].value());
    text(textInput[i].value(), random(windowWidth), random(windowHeight));
    })
  }

}
