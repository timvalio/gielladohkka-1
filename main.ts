let njunni = 0
let olgeš_giehta = 0
let gurut_giehta = 0
let gurut_juolgi = 0
let olgeš_juolgi = 0
let čoavji = 0
let gállu = 0
led.enable(false)
dfplayermini.connect(SerialPin.P1, SerialPin.P0)
dfplayermini.setVolume(15)
basic.forever(function () {
    if (gállu) {
        dfplayermini.playFile(110, dfplayermini.isRepeat.No)
    }
    if (čoavji) {
        dfplayermini.playFile(132, dfplayermini.isRepeat.No)
        basic.pause(500)
        dfplayermini.playFile(123, dfplayermini.isRepeat.No)
        basic.pause(500)
        dfplayermini.playFile(108, dfplayermini.isRepeat.No)
    }
})
basic.forever(function () {
    olgeš_juolgi = pins.digitalReadPin(DigitalPin.P8)
    gurut_juolgi = pins.digitalReadPin(DigitalPin.P4)
    gurut_giehta = pins.digitalReadPin(DigitalPin.P3)
    olgeš_giehta = pins.digitalReadPin(DigitalPin.P7)
    njunni = pins.digitalReadPin(DigitalPin.P6)
    gállu = pins.digitalReadPin(DigitalPin.P10)
    čoavji = pins.digitalReadPin(DigitalPin.P9)
})
