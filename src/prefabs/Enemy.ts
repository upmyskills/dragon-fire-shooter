import { BaseUnit } from './BaseUnit';
import { IUnitOptions } from '../interfaces';

class Enemy extends BaseUnit {
  static generate(scene: Phaser.Scene) {
    const params = Enemy.generateAttributes(scene);

    return new Enemy(params);
  }

  static generateAttributes(scene: Phaser.Scene) {
    const enemyID = Phaser.Math.Between(1, 4);
    const width = Number(scene.game.config.width);
    const height = Number(scene.game.config.height);

    const params: IUnitOptions = {
      scene,
      posX: Phaser.Math.Between(width + 100, width + 500),
      posY: Phaser.Math.Between(100, height - 180),
      texture: 'enemy',
      frame: `enemy${enemyID}`,
    };

    return params;
  }

  initUnit() {
    this.baseVelocity = Phaser.Math.Between(100, 500);
    super.initUnit();
  }

  move() {
    this.setVelocityX(-this.baseVelocity);
  }

  reset() {
    const params = Enemy.generateAttributes(this.scene);

    if (params.frame) this.setFrame(params.frame);
    super.reset(params.posX, params.posY);
  }

  update() {
    if (this.active && this.y > 600) this.setVelocityY(-600);
    if (this.isOutOfLeft()) {
      this.setAlive(false);

      const timer = this.scene.time.addEvent({
        delay: Phaser.Math.Between(1, 3) * Phaser.Math.Between(200, 1000),
        callback: () => {
          this.reset();
          timer.remove();
        },
        callbackScope: this,
      });
    }
  }
}

export { Enemy };
