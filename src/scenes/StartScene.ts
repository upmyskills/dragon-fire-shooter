import { gameText } from '../styles/textStyles';

class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.drawText();
    this.addListeners();
  }

  drawText() {
    const sceneWidth = Number(this.sys.game.config.width);
    const sceneHeight = Number(this.sys.game.config.height);

    const startText = this.add
      .text(sceneWidth / 2, sceneHeight * 0.7, 'Tap to start!', gameText)
      .setOrigin(0.5)
      .setAlpha(0.4);

    this.tweens.add({
      targets: startText,
      duration: 400,
      alpha: 1,
      repeat: -1,
      yoyo: true,
    });
  }

  addListeners() {
    this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.scene.start('GameScene');
    });
  }
}

export { StartScene };
