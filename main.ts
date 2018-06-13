let output = 0
let AntiNegIn = 0
let numb2 = 0
let numb1 = 0
let numbOutput = 0
let numbInput = ""
let loadAnim = 0
let length = 0
let setAnim = 0
let isGen = 0
let onSet = 0
function gen()  {
    serial.writeLine("Generating... with a length of " + length)
    serial.writeLine("")
    loadAnim = 1
    basic.pause(4000)
    loadAnim = 0
    for (let i = 0; i < length; i++) {
        numb1 = (Math.random(20001) + 1) * (input.temperature() + 1)
        numb2 = numb1 * (input.lightLevel() + 1)
        AntiNegIn = numb2 * (Math.random(56) + 1)
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
input.onButtonPressed(Button.A, () => {
    onSet = 0
    isGen = 1
})
input.onButtonPressed(Button.B, () => {
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
input.onPinPressed(TouchPin.P0, () => {
    if (isGen == 0) {
        serial.writeLine("NumbGen 0.0.1 | System Stats")
        serial.writeLine("Device Name: " + control.deviceName())
        serial.writeLine("Device Serial: " + control.deviceSerialNumber())
        serial.writeLine("Temp: " + input.temperature())
    }
})
serial.writeLine(control.deviceName())
serial.writeNumber(control.deviceSerialNumber())
serial.writeLine("")
serial.writeLine("NumbGen 0.0.1 | Press A to begin | Press B to set length")
length = 5
isGen = 0
basic.forever(() => {
    if (loadAnim == 1) {
        led.plot(Math.random(5), Math.random(5))
    }
})
basic.forever(() => {
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
        gen()
    }
})
basic.forever(() => {
    if (setAnim == 1) {
        led.plot(Math.random(5), Math.random(5))
    }
})
