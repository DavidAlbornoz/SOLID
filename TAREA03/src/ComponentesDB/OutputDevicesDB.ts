import { Component } from '../class/component.js';
import { Screen } from '../class/components/screen.js'
import { LaserPrinter } from '../class/components/laserPrinter.js'
import { InkjectPrinter } from '../class/components/inkjetPrinter.js'

let type: string = 'OutputDevice';

export let OutputDevicesDB: Component[] = [
    new Screen('13', 'Screen', '', 'Samsung', 2299, type),
    new Screen('14', 'Screen', '', 'Samsung', 2399, type),
    new LaserPrinter('15', 'LaserPrinter', '', 'Cannon', 1599, type),
    new LaserPrinter('16', 'LaserPrinter', '', 'Cannon', 1499, type),
    new InkjectPrinter('17', 'InkjectPrinter', '', 'HP', 2199, type),
    new InkjectPrinter('18', 'InkjectPrinter', '', 'HP', 2299, type)
]