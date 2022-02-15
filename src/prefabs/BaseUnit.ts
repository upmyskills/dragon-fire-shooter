import { IUnitOptions } from '../interfaces';

class BaseUnit extends Phaser.Physics.Arcade.Sprite {
  public baseVelocity: number;
  public fireVariant?: number;
  public projectileCount?: number;
  public huste?: number;

  constructor(options: IUnitOptions) {
    const { scene, posX, posY, texture, frame, baseVelocity } = options;
    super(scene, posX || 0, posY || 0, texture, frame);

    this.baseVelocity = baseVelocity || 200;
    this.initUnit();
  }

  initUnit() {
    this.scene.physics.add.existing(this);
    this.scene.physics.world.enable(this);
    this.body.enable = true;
    this.scene.add.existing(this);
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  move() {
    this.setVelocityX(this.baseVelocity);
  }

  reset(posX: number, posY: number) {
    this.setPosition(posX, posY);
    this.setVelocityY(0);
    this.setAlive(true);
  }

  setAlive(status: boolean) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);
  }

  isOutOfRight() {
    return this.active && this.x > this.scene.game.config.width;
  }

  isOutOfLeft() {
    return this.active && this.x < 0;
  }

  isOutOfTopBottom() {
    return (this.active && this.y < 0) || (this.active && this.y < this.scene.game.config.height);
  }
}

export { BaseUnit };
