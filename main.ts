let heroImg = sprites.castle.heroWalkFront1
let batImg = sprites.builtin.forestBat4
let snakeImg = sprites.builtin.forestSnake2

info.setLife(3);

// Create hero sprite
let hero = sprites.create(heroImg, SpriteKind.Player);
controller.moveSprite(hero);

// Spawn Bats
game.onUpdateInterval(900,function() {
    let enemy = sprites.create(batImg,SpriteKind.Enemy);
    enemy.setPosition(160, randint(0,120));
    enemy.setVelocity(randint(-75, -50), 0);
    enemy.setFlag(SpriteFlag.AutoDestroy, true);
})

// Spawn Snakes
namespace SpriteKind{
    export const Enemy2 = SpriteKind.create();
}

game.onUpdateInterval(2250,function() {
    let enemy = sprites.create(snakeImg,SpriteKind.Enemy2);
    enemy.setPosition( randint(0,160), 0);
    enemy.setVelocity(0, randint(25, 50));
    enemy.setFlag(SpriteFlag.AutoDestroy, true);
})

//Detect when hero and Bats collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1);
    otherSprite.startEffect(effects.disintegrate, 100);
    otherSprite.destroy();
})

//Detect when hero and Snakes collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-2);
    otherSprite.startEffect(effects.confetti, 100);
    otherSprite.destroy();
})