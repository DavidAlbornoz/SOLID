import { Component } from '../class/component.js'
import { GraphicTablet } from '../class/components/graphicTablet.js'
import { Keyboard } from '../class/components/keyboard.js'
import { Mouse } from '../class/components/mouse.js'

let type: string = 'InputDevice';

export let InputDevicesDB: Component[] = [
    new GraphicTablet('7', 'GraphicTablet', 'Huawei', ' ', 2199, type),
    new GraphicTablet('8', 'GraphicTablet', 'Sonic', ' ', 1999, type),
    new Keyboard('9', 'Keyboard', 'Genius', ' ', 69, type),
    new Keyboard('10', 'Keyboard', 'Logitech', ' ', 89, type),
    new Mouse('11', 'Mouse', 'Genius', ' ', 25, type),
    new Mouse('12', 'Mouse', 'Logitech', ' ', 35, type)
]
