namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
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
/**
 * Initialize
 */
let enemy2: Sprite = null
let enemy: Sprite = null
let heroImg = sprites.castle.heroWalkFront1
let batImg = sprites.builtin.forestBat4
let snakeImg = sprites.builtin.forestSnake2
tiles.setTilemap(tilemap`level_0`)
info.setLife(3)
info.startCountdown(45)
// Create hero sprite
let hero = sprites.create(heroImg, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
tiles.placeOnTile(hero, tiles.getTileLocation(2, 2))
// Spawn Bats
game.onUpdateInterval(500, function () {
    enemy = sprites.create(batImg, SpriteKind.Enemy)
    enemy.setVelocity(0, randint(-75, -50))
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(enemy, sprites.dungeon.greenOuterWest1)
})
// Spawn Snakes
game.onUpdateInterval(500, function () {
    enemy2 = sprites.create(snakeImg, SpriteKind.Enemy2)
    enemy2.setVelocity(0, randint(25, 65))
    enemy2.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(enemy2, sprites.dungeon.greenOuterNorth0)
})
