import { IUnitOptions } from '../interfaces';
import { BaseUnit } from './BaseUnit';

class Player extends BaseUnit {
  private cursor: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(options: IUnitOptions) {
    super(options);
    this.initUnit();
    this.setGravityY(300);

    this.cursor = this.scene.input.keyboard.createCursorKeys();

    // this.initUnit();
    this.blink(options.scene);
  }

  blink(scene: Phaser.Scene) {
    scene.tweens.add({
      targets: this,
      duration: 200,
      repeat: 5,
      alpha: 0.5,
      yoyo: true,
      ease: 'Bounce.easeOut',
    });
  }

  move() {
    super.move();

    if (this.cursor.left.isDown) {
      this.setVelocityX(-this.baseVelocity);
    } else if (this.cursor.right.isDown) {
      this.setVelocityX(this.baseVelocity);
    }

    if (this.cursor.down.isDown) {
      this.setVelocityY(this.baseVelocity);
    } else if (this.cursor.up.isDown) {
      this.setVelocityY(-this.baseVelocity);
    }

    if (this.y > 610) this.setVelocityY(-400);
  }
}

export { Player };
