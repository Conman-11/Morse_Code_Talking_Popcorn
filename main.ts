let Variable1 = 0
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
basic.forever(function () {
    Variable1 = randint(0, 1)
    if (Variable1 == 0) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
    if (Variable1 == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    }
    strip.rotate(1)
    strip.show()
    basic.pause(500)
})
