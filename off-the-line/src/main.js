var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var screenScale = 1.0;

// FULL HEIGHT AND WIDTH ON ANY MODE
// screenWidth = window.outerWidth;
// screenHeight = window.outerHeight;

// MOBILE DEVICES ONLY
// if (window.innerHeight > window.innerWidth) {
//   screenHeight = 1280;
//   screenWidth = 720;
// } else {
//   screenWidth = window.innerWidth;
//   screenHeight = window.innerHeight;
// }

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
    fontSize: 40,
    fontStyle: "bold",
    color: "#08F",
    textAlign: "center",
  });
}
