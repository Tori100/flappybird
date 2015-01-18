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

var pipes;
var pipe_interval=1.75;
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/Lucy100.jpeg");
game.load.audio("score","assets/Mario.wav");

game.load.image("pipe","assets/MacLipstic.jpg");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.add.text(400, 20, "Jump Lucy Jump!",
    {font: "30px Arial", fill: "#660066"});
    // set the background colour of the scene
    game.stage.setBackgroundColor("#33CCFF");
    //game.add.sprite(10, 100, "playerImg")

    //game.input.onDown.add(clickHandler);


    label_score=game.add.text(20,20,"0");
    //game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(changeScore);
    //player = game.add.sprite(100, 200, "playerImg");
    //game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    //game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    //game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    //game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);


    player = game.add.sprite(80, 200, "playerImg");
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.enable(player);
    player.body.gravity.y = 200;
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(player_jump);


    pipes = game.add.group();

    game.time.events.loop(pipe_interval * Phaser.Timer.SECOND, generate_pipe);


}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    game.physics.arcade.overlap(player, pipes, game_over);
}
//
//function clickHandler(event){
//    game.add.sprite(event.x, event.y, "playerImg");
//
//}

//function spaceHandler(){
//
//    game.sound.play("score");
//   // alert("hello");
//}



//function moveRight(){
//    player.x = player.x + 20;
//
//}
//
//function moveLeft(){
//    player.x = player.x - 20;
//
//}
//function moveUp(){
//    player.y = player.y - 20;
//
//}
//function moveDown(){
//    player.y = player.y + 10;
//
//}

function add_pipe_block(x, y){
    var pipe = pipes.create(x, y, "pipe");
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -200
}

function generate_pipe(){
    var gap_start = game.rnd.integerInRange(1, 5);
    for (var count = 0; count < 10; count++){
        if(count != gap_start && count != gap_start+1){
            add_pipe_block(1000, count * 50);

        }
    }
        changeScore();
}

function player_jump (){
    player.body.velocity.y = -140;
}

function changeScore () {
    score = score + 1;
    label_score.setText(score.toString());
}



    function game_over(){
        game.destroy();
    }


