function Izquierda () {
    basic.showArrow(ArrowNames.NorthWest)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
// Aquí haces tu programa
input.onButtonPressed(Button.A, function () {
    adelante()
    basic.pause(500)
    Girar_Izquierda()
    basic.pause(2000)
    Parar()
    basic.pause(500)
    atras()
    basic.pause(500)
    Girar_Derecha()
    basic.pause(2000)
    Parar()
    basic.pause(100)
})
function Parar () {
    basic.showIcon(IconNames.SmallSquare)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function adelante () {
    basic.showArrow(ArrowNames.North)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Derecha () {
    basic.showArrow(ArrowNames.NorthWest)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
input.onButtonPressed(Button.B, function () {
    Parar()
})
function Girar_Derecha () {
    basic.showArrow(ArrowNames.East)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function atras () {
    basic.showArrow(ArrowNames.South)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Girar_Izquierda () {
    basic.showArrow(ArrowNames.West)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
Parar()
basic.showIcon(IconNames.StickFigure)
basic.pause(200)
