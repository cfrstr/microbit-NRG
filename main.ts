let output = 0
let AntiNegIn = 0
let numbOutput = 0
let numb2 = 0
let numbInput = ""
let numb1 = 0
let loadAnim = 0
let length = 0
let setAnim = 0
let isGen = 0
let onSet = 0
input.onPinPressed(TouchPin.P0, function () {
    if (isGen == 0) {
        serial.writeLine("NumbGen 0.0.1 | System Stats")
        serial.writeLine("Device Name: " + control.deviceName())
        serial.writeLine("Device Serial: " + control.deviceSerialNumber())
        serial.writeLine("Temp: " + input.temperature())
    }
})
function gen2() {
    serial.writeLine("Generating... with a length of " + length)
    serial.writeLine("")
    for (let i = 0; i < length; i++) {
        numb1 = (Math.randomRange(0, 20001) + 1) * (input.temperature() + 1)
        numb2 = numb1 * (input.lightLevel() + 1)
        AntiNegIn = numb2 * (Math.randomRange(0, 56) + 1)
        output = custom.antiNeg(AntiNegIn)
        serial.writeNumber(output)
    }
    serial.writeLine(" ")
    serial.writeLine("Complete!")
    serial.writeLine("")
    basic.showIcon(IconNames.Yes)
    basic.pause(0)
    isGen = 0
}
input.onButtonPressed(Button.A, function () {
    onSet = 0
    isGen = 1
})
input.onButtonPressed(Button.B, function () {
    if (isGen == 0) {
        setAnim = 1
        serial.writeLine("Enter length as \" [NUMB]# \" NOTE: MUST BE A NUMBER ")
        numbInput = serial.readUntil(serial.delimiters(Delimiters.Hash))
        numbOutput = custom.filterChar(numbInput)
        length = numbOutput
        serial.writeLine("")
        serial.writeLine("Set")
        serial.writeLine("")
        setAnim = 0
        basic.showIcon(IconNames.Yes)
    }
})
serial.writeLine(control.deviceName())
serial.writeNumber(control.deviceSerialNumber())
serial.writeLine("")
serial.writeLine("NumbGen 0.0.1 | Press A to begin | Press B to set length")
length = 5
isGen = 0
basic.forever(function () {
    if (loadAnim == 1) {
        led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
    }
})
basic.forever(function () {
    if (isGen == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(400)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(400)
    } else {
        gen2()
    }
})
basic.forever(function () {
    if (setAnim == 1) {
        led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
    }
})
