export interface IUnitOptions {
  scene: Phaser.Scene;
  posX: number;
  posY: number;
  texture: string | Phaser.Textures.Texture;
  frame?: string | number;
  baseVelocity?: number;
}

export interface IUnitFireOptions {
  velocity: number;
  texture: string | Phaser.Textures.Texture;
  direction: boolean;
}
