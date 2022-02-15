import { Fire } from '../prefabs/Fire';
import { BaseUnit } from '../prefabs/BaseUnit';

class FireGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
  }

  public createFire(unit: BaseUnit) {
    const fire = Fire.generate(unit);
    this.add(fire);
    fire.move();
  }
}

export { FireGroup };
