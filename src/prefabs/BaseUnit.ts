import { IUnitOptions } from '../interfaces';

class BaseUnit extends Phaser.Physics.Arcade.Sprite {
  public baseVelocity: number;

  constructor(options: IUnitOptions) {
    const { scene, posX, posY, texture, frame, baseVelocity } = options;
    super(scene, posX || 0, posY || 0, texture, frame);

    this.baseVelocity = baseVelocity || 200;
  }

  initUnit() {
    this.scene.physics.add.existing(this);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
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
  }

  destroy(fromScene?: boolean): void {
    console.log(this, 'was destroyed!');
  }
}

export { BaseUnit };
