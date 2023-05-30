input.onButtonPressed(Button.AB, function () {
    servos.P0.run(Math.max(98, 78))
    led.plot(2, 6)
})
