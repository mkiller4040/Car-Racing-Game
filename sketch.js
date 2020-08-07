var canvas;
var backgroundImg;
var gameState = 0;
var playerCount;
var database;
var game,player,form;

function setup()
{
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(1175,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
  
}

