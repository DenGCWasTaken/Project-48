var ball;
var database;
var position;
var canvas;
var bg;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var distance = 0;
var cars, car1;
var car1Img;
var ground, groundx2, groundx3, groundx5, groundx10;
var groundImage, groundx2Image, groundx3Image, groundx5Image, groundx10Image;
var groundTest;
var knight, knightImage;
var platform, platformImage;
var invisibleGround;
var knightIdleLeft, knightIdleRight, knightJumpingLeft, knightJumpingRight, knightWalkingLeft, knightWalkingRight;

function preload(){
    car1Img = loadImage("sprites/car1.png");
    groundImage = loadImage("sprites/Ground.png");
    groundx2Image = loadImage("sprites/Ground2.png");
    groundx3Image = loadImage("sprites/Ground3.png");
    groundx5Image = loadImage("sprites/Ground5.png");
    groundx10Image = loadImage("sprites/Ground10.png");
    platformImage = loadImage("sprites/Platform.png");
    knightIdleLeft = loadAnimation("sprites/KnightIdleLeft.png");
    knightIdleRight = loadAnimation("sprites/KnightIdleRight.png");
    knightJumpingLeft  = loadAnimation("sprites/KnightJumpingLeft.png");
    knightJumpingRight  = loadAnimation("sprites/KnightJumpingRight.png");
    knightWalkingLeft = loadAnimation("sprites/KnightWalking1Left.png", "sprites/KnightWalking2Left.png");
    knightWalkingRight = loadAnimation("sprites/KnightWalking1Right.png", "sprites/KnightWalking2Right.png");

}

function setup(){
    database = firebase.database();
    canvas = createCanvas(windowWidth*5,windowHeight);
    groundTest = new Ground(200,200, groundImage);
    groundx2Test = new Ground(600,600, groundx2Image);
    groundx10Test = new Ground(400,400, groundx10Image)
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount == 1){
        game.update(1);
    }
    if(gameState == 1){
        clear();
        game.play();
    }
}