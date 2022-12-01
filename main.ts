let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.setBrightness(input.soundLevel())
    strip.showRainbow(1, 360)
    basic.pause(50)
})
