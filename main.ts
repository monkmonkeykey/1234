input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        60,
        30,
        2
        )
        OLED12864_I2C.rect(
        5,
        5,
        55,
        25,
        2
        )
        for (let index = 0; index <= 19; index++) {
            OLED12864_I2C.hline(
            6,
            6 + index,
            49,
            1
            )
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        60,
        30,
        2
        )
        OLED12864_I2C.rect(
        5,
        5,
        55,
        25,
        2
        )
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    1.8,
    "zzzz",
    1
    )
})
basic.forever(function () {
	
})
