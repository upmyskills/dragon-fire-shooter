import Phaser from 'phaser';
import './index.scss';
import { BootScene, GameScene, PreloadScene, StartScene } from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  parent: 'content',
  type: Phaser.AUTO,
  width: 1024,
  height: 720,
  scene: [BootScene, PreloadScene, StartScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 300,
      },
    },
  },
};

const game = new Phaser.Game(config);
