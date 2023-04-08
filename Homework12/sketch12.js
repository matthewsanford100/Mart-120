// x and y for my character
var characterX = 100;
var characterY = 100;

// x and y for enemy1
var enemy1X = 25;
var enemy1Y = 25;
var enemy1XSpeed;
var enemy1YSpeed;

// x and y for enemy2
var enemy2X = 550;
var enemy2Y = 550;
var enemy2XSpeed;
var enemy2YSpeed;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Dimensions for character
var characterX = 50;
var characterY = 50;

//Mouse click
var mouseShapeX;
var mouseShapeY;

//Borders height and width
var borderWidth = 600;
var borderHeight = 600;

//Canvas
function setup() {
    createCanvas(borderWidth, borderHeight);
    enemy1XSpeed = floor(random() * 10) + 1;
    enemy1YSpeed = floor(random() * 10) + 1;
    enemy2XSpeed = floor(random() * 10) + 1;
    enemy2YSpeed = floor(random() * 10) + 1;
    
}

function draw() {
    //Canvas Set up
    background(220);
    fill(0,0,0);
    createBorders(10);

    //exit message
    textSize(10);
    text("Leave this dungeon! -->", width-125,height-50);

    //Enemy 1
    fill(255,0,0);
    circle(enemy1X, enemy1Y, 20);
    enemy1XSpeed = floor(random() * 10) + 1;
    enemy1YSpeed = floor(random() * 10) + 1;
    enemy1X += enemy1XSpeed;
    enemy1Y += enemy1YSpeed;
    //Enemy Out of Bounds
    if(enemy1X > width) {
        enemy1X = 0;
    }
   if(enemy1X < 0) {
        enemy1X = width;
   }
   if(enemy1Y > height) {
       enemy1Y = 0;
   }
   if(enemy1Y < 0) {
       enemy1Y = height;
   }

   //Enemy 2
   fill(0,0,0);
   square(enemy2X, enemy2Y, 25);
   enemy2XSpeed = floor(random() * 10) + 1;
   enemy2YSpeed = floor(random() * 10) + 1;
   enemy2X -= enemy2XSpeed;
   enemy2Y -= enemy2YSpeed;
   //Enemy 2 Out of Bounds
   if(enemy2X > width) {
       enemy2X = 550;
   }
  if(enemy2X < 0) {
       enemy2X = width;
  }
  if(enemy2Y > height) {
      enemy2Y = 550;
  }
  if(enemy2Y < 0) {
      enemy2Y = height;
  }

   //create chatacter
   drawCharacter();
   characterMovement();

   //If the character escapes the dungeon
    if(characterX > width && characterY > width-100) {
    textSize(25);
    text("The Warrior Hath Esacapeth!", width/2-150, height/2-150);
   }
   else if(characterX > 0 && characterY > 0) {
    textSize(25);
    text("Flee the dungeon!", width/2-150, height/2-150);
   }
   else {
    textSize(25);
    text("Wrong Way Dummy.", width/2-150, height/2-150);
   }
   
   
   
   

   // create Mouse Shape 
   fill(255,255,255);
   square(mouseShapeX, mouseShapeY, 15);



}
function createBorders(thickness) {
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-100);
}

function drawCharacter() {
    fill(31, 78, 47);
    square(characterX,characterY,30);

}
function characterMovement() {
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}




