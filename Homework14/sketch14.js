// x and y for my character
var characterX = 100;
var characterY = 100;

//Enemy Arrays
var enemyXs = [];
var enemyYs = [];
var enemyDiameters = [];
var enemyXSpeeds = [];
var enemyYSpeeds = [];

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
    for (var i = 0; i < 5; i++) {
        enemyXSpeeds[i] = floor(random() * 10) + 1;
        enemyYSpeeds[i] = floor(random() * 10) + 1;
        enemyXs[i] = getRandomNumber(600);
        enemyYs[i] = getRandomNumber(600);
        enemyDiameters[i] = getRandomNumber(25);
    } 
}

function draw() {
    //Canvas Set up
    background(220);
    fill(0,0,0);
    createBorders(10);

    //Enemy Arrays 
    
    for(var i = 0; i < enemyXs.length; i++) {
        circle(enemyXs[i],enemyYs[i],enemyDiameters[i]);
        enemyXSpeeds[i] = floor(random() * 10) + 1;
        enemyYSpeeds[i] = floor(random() * 10) + 1;
        //enemy movement
        enemyXs[i] += enemyXSpeeds[i];
        enemyYs[i] += enemyYSpeeds[i];
        //enemy out of bounds
        if(enemyXs[i] > width) {
            enemyXs[i] = 0;
        }
        if(enemyXs[i] < 0) {
            enemyXs[i] = width;
        }
        if(enemyYs[i] > height) {
           enemyYs[i] = 0;
        }
        if(enemyYs[i] < 0) {
           enemyYs[i] = height;
        }
    }
    
    //create chatacter
    drawCharacter();
    characterMovement();

    // create Mouse Shape
    createMouseClicked(mouseX,mouseY);

    //messages
    createMessages();

    //Exit Message
    initialMessages();
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
function createMouseClicked() {
    fill(255,255,255);
    square(mouseShapeX, mouseShapeY, 15);
}    
function createMessages() {
    fill(0,0,0);
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
       
}
function initialMessages() {
    //exit message
    textSize(10);
    text("Leave this dungeon! -->", width-125,height-50);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}


