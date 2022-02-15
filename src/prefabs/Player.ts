import { BaseUnit } from './BaseUnit';
import { FireGroup } from '../groups/FiresGroup';
import { IUnitOptions } from '../interfaces';

class Player extends BaseUnit {
  private cursor: Phaser.Types.Input.Keyboard.CursorKeys;
  private fireGroup!: FireGroup;

  constructor(options: IUnitOptions) {
    super(options);
    this.fireGroup = new FireGroup(this.scene);
    this.setGravityY(250);

    this.cursor = this.scene.input.keyboard.createCursorKeys();

    this.blink(options.scene);
    this.setProjectileParams();
    this.fireTimer();
  }

  openFire() {
    const hasDeadFire = this.fireGroup.getFirstDead();

    if (this.projectileCount! > this.fireGroup.getLength()) {
      this.fireGroup.createFire(this);
    }
    if (hasDeadFire) {
      const posX = this.x + this.width / 2;
      const posY = this.y;
      hasDeadFire.reset(posX, posY);
    }
  }

  fireTimer() {
    this.scene.time.addEvent({
      delay: this.huste,
      repeat: this.projectileCount,
      loop: true,
      callbackScope: this,
      callback: this.openFire,
    });
  }

  setProjectileParams() {
    this.projectileCount = 3;
    this.fireVariant = 1;
    this.huste = 700;
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
    this.setVelocityX(0);

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
