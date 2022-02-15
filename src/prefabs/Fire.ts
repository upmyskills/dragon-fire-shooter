import { IUnitOptions } from '../interfaces';
import { BaseUnit } from './BaseUnit';

class Fire extends BaseUnit {
  initUnit(): void {
    super.initUnit();
    this.motion();
  }

  changeSpeed(val: number) {
    this.baseVelocity = val;
  }

  motion() {
    this.scene.tweens.add({
      targets: this,
      duration: 1300,
      rotation: 6.5,
      repeat: -1,
    });

    this.scene.tweens.add({
      targets: this,
      duration: 200,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
    });
  }

  static generate(unit: BaseUnit) {
    const positionX = unit.x + unit.width / 2;
    const positionY = unit.y + unit.height / 7;
    const params: IUnitOptions = {
      texture: 'fireImage',
      posX: positionX,
      posY: positionY,
      scene: unit.scene,
    };
    return new Fire(params);
  }

  update() {
    if (this.isOutOfRight()) {
      this.setAlive(false);
    }
  }
}

export { Fire };
