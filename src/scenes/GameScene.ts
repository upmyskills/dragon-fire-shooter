import { Enemy, Player } from '../prefabs';

class GameScene extends Phaser.Scene {
  player!: Player;
  enemy!: Enemy;
  cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  background!: Phaser.GameObjects.TileSprite;
  sceneWidth!: number;
  sceneHeight!: number;

  constructor() {
    super('GameScene');
  }

  init() {
    this.cursor = this.input.keyboard.createCursorKeys();
    this.sceneWidth = Number(this.sys.game.config.width);
    this.sceneHeight = Number(this.sys.game.config.height);
  }

  create() {
    this.showBackground();
    this.player = new Player({ scene: this, posX: 150, posY: 350, texture: 'dragon', frame: 'dragon1' });
    this.enemy = Enemy.generate(this);
  }

  update() {
    this.scrollBackground();
    this.player.move();
    this.enemy.move();
  }

  showBackground() {
    this.background = this.add.tileSprite(0, 0, this.sceneWidth, this.sceneHeight, 'bgImage').setAlpha(0).setOrigin(0);
    this.tweens.add({
      targets: this.background,
      duration: 1500,
      alpha: 1,
    });
  }

  scrollBackground() {
    const curBGSpeed = 0.5;
    const curPositionX = this.background.tilePositionX;
    this.background.setTilePosition(curPositionX + curBGSpeed);
  }
}

export { GameScene };
