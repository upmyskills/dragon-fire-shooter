import { Enemy } from '../prefabs';

class EnemyGroup extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    const word = new Phaser.Physics.Arcade.World(scene, {});
    super(word, scene);
    this.scene = scene;
  }

  public createEmemy() {
    const enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.move();
  }

  public jumpEnemy() {
    this.children.each((gameObject) => {
      const enemy = gameObject as Phaser.Physics.Arcade.Sprite;
      if (enemy.y > 600) enemy.setVelocityY(-500);
      if (enemy.x < -100) {
        this.remove(enemy);
        this.createEmemy();
      }
    });

    console.log(this.getLength());
  }
}

export { EnemyGroup };
