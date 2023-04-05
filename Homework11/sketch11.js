var rightEyeX = 150;
var leftEyeX = 275;
var rightEyeDirection = 3;
var leftEyeDirection = -3;
var teethY = 277;
var teethDirection = 3;
var mouthX = 225;
var mouthY = 300;
var mouthDirection = 3;
var size = 15;
var count = 0;
var sizeDirection = 1;

function setup() {
  createCanvas(400,400);
  rightEyeDirection = floor(random() * 10) + 1;
  leftEyeDirection = floor(random() * 10) + 1;
  teethDirection = floor(random() * 10) + 1;
  mouthDirection = floor(random() * 10) + 1;
}

function draw() {
  background(220);
  //Head
  circle(200,200,300);
  //Eyes
  ellipse(rightEyeX,200,80,60);
  ellipse(rightEyeX,200,20,10);
  rightEyeX+=rightEyeDirection;
  if(rightEyeX >= 400 || rightEyeX <= 1)
  {
      rightEyeDirection *= -1;
  }
  ellipse(leftEyeX,150,80,60);
  ellipse(leftEyeX,150,20,10);
  leftEyeX+=leftEyeDirection;
  if(leftEyeX >= 400 || leftEyeX <= 1)
  {
      leftEyeDirection *= -1;
  }
  //Nose
  triangle(200, 200, 358, 250, 286, 275);
  
  //Mouth
  ellipse(mouthX,mouthY,140,50);
  mouthX+=mouthDirection;
  if(mouthX >= 400 || mouthX <= 1)
  {
      mouthDirection *= -1;
  }
  mouthY+=mouthDirection;
  if(mouthY >= 400 || mouthY <= 1)
  {
      mouthDirection *= -1;
  }
  //Teeth
  rect(225,teethY,10,20);
  rect(245,teethY,10,20);
  rect(205,teethY,10,20);
  teethY+=teethDirection;
  if(teethY >= 400 || teethY <= 1)
  {
      teethDirection *= -1;
  }
  rect(150,350,100,200);
  //Eyebrows
  line(185, 175, 85, 125);
  line(215, 125, 300, 100);
  strokeWeight(3);
  //Freckles
  point(150, 250);
  point(155, 250);
  point(160, 250);
  point(275, 195);
  point(280, 195);
  point(285, 195);
  //Name and Title
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
  text('ME', 195, 375);
  text('by: matthew sanford', 150, 390);
}

