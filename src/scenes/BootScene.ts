import bgImage from '../assets/sprites/background.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('bgImage', bgImage);
  }

  create() {
    this.scene.start('PreloadScene');
  }
}

export { BootScene };
