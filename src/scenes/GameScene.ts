import { Player } from '../prefabs';
import { EnemyGroup } from '../groups';

class GameScene extends Phaser.Scene {
  player!: Player;
  enemyGroup!: EnemyGroup;
  cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  background!: Phaser.GameObjects.TileSprite;
  sceneWidth!: number;
  sceneHeight!: number;

  constructor() {
    super('GameScene');
  }

  init() {
    this.showBackground();
    this.cursor = this.input.keyboard.createCursorKeys();
    this.sceneWidth = Number(this.sys.game.config.width);
    this.sceneHeight = Number(this.sys.game.config.height);

    this.enemyGroup = new EnemyGroup(this);
    this.player = new Player({ scene: this, posX: 150, posY: 350, texture: 'dragon', frame: 'dragon1' });
  }

  create() {
    this.enemyGroup.createEmemy();
    this.enemyGroup.createEmemy();
    this.enemyGroup.createEmemy();
  }

  update() {
    this.scrollBackground();
    this.player.move();
    this.enemyGroup.jumpEnemy();
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
