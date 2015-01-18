// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(800, 500, Phaser.AUTO, 'game', stateActions);

var score = 0;
var label_score;

var player;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/Lucy100.jpeg");
game.load.audio("score","assets/Mario.wav");


}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.add.text(50, 20, "Jump Lucy Jump!",
    {font: "30px Arial", fill: "#660066"});
    // set the background colour of the scene
    game.stage.setBackgroundColor("#33CCFF");
    game.add.sprite(10, 100, "playerImg")

    //game.input.onDown.add(clickHandler);

    label_score=game.add.text(20,20,"0");
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(changeScore);
    player = game.add.sprite(100, 200, "playerImg");
    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}

function clickHandler(event){
    game.add.sprite(event.x, event.y, "playerImg");

}

function spaceHandler(){

    game.sound.play("score");
   // alert("hello");
}
 function changeScore () {
     score = score + 1;
     label_score.setText(score.toString());
 }


function moveRight(){
    player.x = player.x + 20;

}

function moveLeft(){
    player.x = player.x - 20;

}
function moveUp(){
    player.y = player.y - 20;

}
function moveDown(){
    player.y = player.y + 20;

}

