import { BaseUnit } from './BaseUnit';
import { IUnitOptions } from '../interfaces';

class Enemy extends BaseUnit {
  constructor(options: IUnitOptions) {
    super(options);
    this.initUnit();

    this.baseVelocity = Phaser.Math.Between(100, 500);
    this.setGravityY(400);
    // this.setGravityX(25);
  }

  static generate(scene: Phaser.Scene) {
    const enemyID = Phaser.Math.Between(1, 4);
    const width = Number(scene.game.config.width);
    const height = Number(scene.game.config.height);

    const params: IUnitOptions = {
      scene,
      posX: Phaser.Math.Between(width + 100, width + 500),
      posY: Phaser.Math.Between(100, height - 100),
      texture: 'enemy',
      frame: `enemy${enemyID}`,
    };

    return new Enemy(params);
  }

  move() {
    this.setVelocityX(-this.baseVelocity);

    if (this.y > 600) this.setVelocityY(-600);
    if (this.x < -150) this.destroy();
  }
}

export { Enemy };
