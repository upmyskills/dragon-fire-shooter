import bgImage from '../assets/sprites/background.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('bgImage', bgImage);
  }

  create() {
    this.add.image(0, 0, 'bgImage').setOrigin(0);
  }
}

export { BootScene };
