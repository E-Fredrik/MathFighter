import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("over-scene");
    }

    init(data) {
        this.replayButton = undefined;
        this.score = data.score;
    }

    preload() {
        this.load.image("background", "../../public/images/bg_layer1.png");
        this.load.image("replay-button", "../../public/images/replay.png");
        this.load.image("game-over", "../../public/images/gameover.png");
    }

    create() {
        this.add.image(240,320, "background");
        this.add.image(240,320, "game-over");
        this.add.text(100,300, "Score: " + this.score, {
            fontSize: "32px",
            fill: "black",
        });
        this.replayButton = this.add.image(200,400, "../../public/images/replay.png").setInteractive().setScale(0.5);
        this.replayButton.once("pointerup", () => {
            this.scene.start("math-fighter-scene");
        },this)
    }
}