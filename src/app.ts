import Phaser from 'phaser';
import './index.scss';
import { BootScene } from './scenes/BootScene';

const config: Phaser.Types.Core.GameConfig = {
  parent: 'content',
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  scene: [BootScene],
};

const game = new Phaser.Game(config);
