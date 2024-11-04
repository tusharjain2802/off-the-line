var screenWidth = 1280;
var screenHeight = 720;
var screenScale = 1.0;

var aw = new Aw(screenWidth, screenHeight, screenScale, []);
aw.state = init;

var level;
var player;
var levelIdx = 0;
var endLevelTime = 0;
var lives = 5;
var difficultyMode = 0;
var score = 0;

function init(deltaTime) {
  renderBackgroundSpeedLines(deltaTime);

  if (aw.mouseLeftButtonJustPressed) {
    aw.state = mainMenu;
    aw.mouseLeftButtonJustPressed = false;

    aw.playNote("a", 4, 0.05, 0.0);
    aw.playNote("b", 4, 0.05, 0.05);
  }

  // Click to play
  aw.ctx.shadowBlur = 20;
  aw.ctx.shadowColor = "#08F";
  aw.drawText({
    text: "CLICK TO PLAY",
    x: screenWidth * 0.5,
    y: screenHeight * 0.5,
    fontSize: 20,
    fontStyle: "bold",
    color: "#08F",
    textAlign: "center",
  });
}
