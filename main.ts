namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
// Detect when hero and Snakes collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.startEffect(effects.confetti, 100)
    otherSprite.destroy()
})
// Detect when hero and Bats collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.disintegrate, 100)
    otherSprite.destroy()
})
let enemy2: Sprite = null
let enemy: Sprite = null
let heroImg = sprites.castle.heroWalkFront1
let batImg = sprites.builtin.forestBat4
let snakeImg = sprites.builtin.forestSnake2
info.setLife(3)
// Create hero sprite
let hero = sprites.create(heroImg, SpriteKind.Player)
controller.moveSprite(hero)
// Spawn Bats
game.onUpdateInterval(900, function () {
    enemy = sprites.create(batImg, SpriteKind.Enemy)
    enemy.setPosition(160, randint(0, 120))
    enemy.setVelocity(randint(-75, -50), 0)
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(2250, function () {
    enemy2 = sprites.create(snakeImg, SpriteKind.Enemy2)
    enemy2.setPosition(randint(0, 160), 0)
    enemy2.setVelocity(0, randint(25, 50))
    enemy2.setFlag(SpriteFlag.DestroyOnWall, true)
})
