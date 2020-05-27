controller.combos.attachCombo("DUD", function () {
    mySprite.vy = 0
})
controller.combos.attachCombo("DDD", function () {
    mySprite.vy = 30
})
controller.combos.attachCombo("BBA", function () {
    mySprite.vx = -30
})
controller.combos.attachCombo("UUU", function () {
    mySprite.vy = -30
})
controller.combos.attachCombo("AAB", function () {
    mySprite.vx = 30
})
controller.combos.attachCombo("ABA", function () {
    mySprite.vx = 0
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
mySprite.setPosition(6, 59)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
	
})
