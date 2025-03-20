let counter: number;
let hero: Sprite;
let guy: Sprite;
let orb: Sprite;
let ham: Sprite;
let position = 20
for (counter = 0; counter < 4; counter++) {
    hero = sprites.create(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        . b b b d 5 5 5 5 5 4 4 4 4 4 b
        b d d d b b d 5 5 4 4 4 4 4 b .
        b b d 5 5 5 b 5 5 5 5 5 5 b . .
        c d c 5 5 5 5 d 5 5 5 5 5 5 b .
        c b d c d 5 5 b 5 5 5 5 5 5 b .
        . c d d c c b d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    hero.setPosition(position, 100)
    position += 20
}
position = 30
for (counter = 0; counter < 4; counter++) {
    guy = sprites.create(img`
        . . . . . . f f f f . . . . . .
        . . . . f f f 2 2 f f f . . . .
        . . . f f f 2 2 2 2 f f f . . .
        . . f f f e e e e e e f f f . .
        . . f f e 2 2 2 2 2 2 e e f . .
        . . f e 2 f f f f f f 2 e f . .
        . . f f f f e e e e f f f f . .
        . f f e f b f 4 4 f b f e f f .
        . f e e 4 1 f d d f 1 4 e e f .
        . . f e e d d d d d d e e f . .
        . . . f e e 4 4 4 4 e e f . . .
        . . e 4 f 2 2 2 2 2 2 f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
    `, SpriteKind.Player)
    guy.setPosition(30, position)
    position += 20
}
position = 40
let xvalue = 100
for (counter = 0; counter < 4; counter++) {
    orb = sprites.create(img`
        . . . . c c c b b b b b . . . .
        . . c c b 4 4 4 4 4 4 b b b . .
        . c c 4 4 4 4 4 5 4 4 4 4 b c .
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e
        . e b 4 4 4 4 4 5 4 4 4 4 b e .
        8 7 e e b 4 4 4 4 4 4 b e e 6 8
        8 7 2 e e e e e e e e e e 2 7 8
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e
        e b e 8 8 c c 8 8 c c c 8 e b e
        e e b e c c e e e e e c e b e e
        . e e b b 4 4 4 4 4 4 4 4 e e .
        . . . c c c c c e e e e e . . .
    `, SpriteKind.Player)
    orb.setPosition(xvalue, position)
    position += 20
    xvalue -= -10
}
position = 50
xvalue = 120
for (counter = 0; counter < 4; counter++) {
    ham = sprites.create(img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, SpriteKind.Player)
    ham.setPosition(xvalue, position)
    position += 10
    xvalue -= 10
}
for (counter = 0; counter < 4; counter++) {
    ham = sprites.create(img`
            . . . . . . . e c 7 . . . . . .
            . . . . e e e c 7 7 e e . . . .
            . . c e e e e c 7 e 2 2 e e . .
            . c e e e e e c 6 e e 2 2 2 e .
            . c e e e 2 e c c 2 4 5 4 2 e .
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
            . e e e 2 2 2 2 2 2 2 2 2 4 e .
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
            . . 2 e e 2 2 2 2 2 4 4 2 e . .
            . . . 2 2 e e 4 4 4 2 e e . . .
            . . . . . 2 2 e e e e . . . . .
        `, SpriteKind.Player)
    ham.setPosition(xvalue, position)
    position += -10
    xvalue -= 10
}
