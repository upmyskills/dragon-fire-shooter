import Phaser from 'phaser';
import './index.scss';
import { BootScene, GameScene, PreloadScene, StartScene } from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  parent: 'content',
  type: Phaser.AUTO,
  width: 1280,
  height: 780,
  scene: [BootScene, PreloadScene, StartScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);
