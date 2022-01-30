import { BaseUnit } from './BaseUnit';
import { IUnitOptions } from '../interfaces';

class Enemy extends BaseUnit {
  constructor(options: IUnitOptions) {
    super(options);
    this.initUnit();

    this.setGravityY(500);
  }

  static generate(scene: Phaser.Scene) {
    const params: IUnitOptions = {
      scene,
      posX: 900,
      posY: Phaser.Math.Between(100, 700 - 100),
      texture: 'enemy',
      frame: 'enemy1',
    };

    return new Enemy(params);
  }

  move() {
    this.setVelocityX(-this.baseVelocity);

    if (this.y > 600) this.setVelocityY(-800);
    if (this.x < -150) this.destroy();
  }
}

export { Enemy };
