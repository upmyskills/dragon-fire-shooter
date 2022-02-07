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
    console.log('Create new enemy!');
    const enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.move();
  }

  public jumpEnemy() {
    this.children.each((gameObject) => {
      const enemy = gameObject as Phaser.Physics.Arcade.Sprite;
      if (enemy.y > 600) enemy.setVelocityY(-500);
    });
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
