import { Enemy } from '../prefabs';

class EnemyGroup extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;
  count = 1;
  maxCount = 15;
  timeToAdd = 10;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  public createEnemy() {
    const enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.move();
  }

  update() {
    const sec = this.scene.time.now / 1000;

    if (sec > this.timeToAdd && this.count < this.maxCount) {
      this.count += 1;
      this.timeToAdd += 10;
    }

    if (this.getLength() < this.count) this.createEnemy();
  }
}

export { EnemyGroup };
