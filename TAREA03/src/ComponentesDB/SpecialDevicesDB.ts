import { Component } from '../class/component.js';
import { TouchScreen } from '../class/components/touchScreen.js'

let type: string = 'SpecialDevice';

export let SpecialDevicesDB: Component[] = [
    new TouchScreen('19', 'TouchScreen', '', 'Apple', 1699, type),
    new TouchScreen('20', 'TouchScreen', '', 'Apple', 1599, type),
    new TouchScreen('21', 'TouchScreen', '', 'Samsung', 1299, type),
    new TouchScreen('22', 'TouchScreen', '', 'Samsung', 1899, type),
    new TouchScreen('23', 'TouchScreen', '', 'Sony', 1459, type),
    new TouchScreen('24', 'TouchScreen', '', 'Sony', 1559, type)
]

