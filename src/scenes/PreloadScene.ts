import fireImage from '../assets/sprites/fire.png';
import dragonAtlas from '../assets/atlas/dragon.png';
import dragonJSON from '../assets/atlas/dragon.json';
import enemiesAtlas from '../assets/atlas/enemy.png';
import enemiesJSON from '../assets/atlas/enemy.json';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.add.image(0, 0, 'bgImage').setOrigin(0);
    this.loadFonts();
    this.loadModelsFromAtlas();
  }

  create() {
    this.scene.start('StartScene');
  }

  loadFonts() {
    this.add.text(0, 0, '', { fontFamily: 'CurseCasual' });
  }

  loadModelsFromAtlas() {
    this.load.atlas('dragon', dragonAtlas, dragonJSON);
    this.load.atlas('enemy', enemiesAtlas, enemiesJSON);
    this.load.image('fireImage', fireImage);
  }
}

export { PreloadScene };
