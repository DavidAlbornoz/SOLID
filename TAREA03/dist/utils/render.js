// DadaBase
import { CPU_DB } from '../ComponentesDB/CPU_DB.js';
import { InputDevicesDB } from '../ComponentesDB/InputDevicesDB.js';
import { OutputDevicesDB } from '../ComponentesDB/OutputDevicesDB.js';
import { SpecialDevicesDB } from '../ComponentesDB/SpecialDevicesDB.js';
// Handles
import { addComponent } from '../index.js';
function renderCPUs() {
    let CPUs = [...CPU_DB];
    let $itemsDP = document.querySelector('#itemsDP');
    for (const info of CPUs) {
        let card = document.createElement('div');
        card.classList.add('card', 'col-sm-4');
        card.style;
        let car_body = document.createElement('div');
        car_body.classList.add('card-body');
        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.style.fontSize = '15px';
        card_title.textContent = `${info.name} ${info.brand} ${info.model} `;
        let img = document.createElement('img');
        img.classList.add('mb-2');
        img.style.width = '90px';
        let card_price = document.createElement('p');
        card_price.classList.add('card-text');
        card_price.textContent = `S/.${info.price}`;
        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2');
        btnAdd.textContent = 'Añadir al Carrito';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);
        btnAdd.id = "nbutton";
        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsDP.appendChild(card);
    }
}
function renderInputDevices() {
    let InputDevices = [...InputDevicesDB];
    let $itemsID = document.querySelector('#itemsID');
    for (const info of InputDevices) {
        let card = document.createElement('div');
        card.classList.add('card', 'col-sm-4');
        card.style;
        let car_body = document.createElement('div');
        car_body.classList.add('card-body');
        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.style.fontSize = '15px';
        card_title.textContent = `${info.name} ${info.brand} ${info.model} `;
        let img = document.createElement('img');
        img.classList.add('mb-2');
        img.style.width = '90px';
        let card_price = document.createElement('p');
        card_price.classList.add('card-text');
        card_price.textContent = `S/.${info.price}`;
        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2');
        btnAdd.textContent = 'Añadir al Carrito';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);
        btnAdd.id = "nbutton";
        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsID.appendChild(card);
    }
}
function renderOutputDevices() {
    let OutputDevices = [...OutputDevicesDB];
    let $itemsOD = document.querySelector('#itemsOD');
    for (const info of OutputDevices) {
        let card = document.createElement('div');
        card.classList.add('card', 'col-sm-4');
        card.style;
        let car_body = document.createElement('div');
        car_body.classList.add('card-body');
        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.style.fontSize = '15px';
        card_title.textContent = `${info.name} ${info.brand} ${info.model} `;
        let img = document.createElement('img');
        img.classList.add('mb-2');
        img.style.width = '90px';
        let card_price = document.createElement('p');
        card_price.classList.add('card-text');
        card_price.textContent = `S/.${info.price}`;
        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2');
        btnAdd.textContent = 'Añadir al Carrito';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);
        btnAdd.id = "nbutton";
        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsOD.appendChild(card);
    }
}
function renderSpecialDevices() {
    let SpecialDevices = [...SpecialDevicesDB];
    let $itemsSD = document.querySelector('#itemsSD');
    for (const info of SpecialDevices) {
        let card = document.createElement('div');
        card.classList.add('card', 'col-sm-4');
        card.style;
        let car_body = document.createElement('div');
        car_body.classList.add('card-body');
        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.style.fontSize = '15px';
        card_title.textContent = `${info.name} ${info.brand} ${info.model} `;
        let img = document.createElement('img');
        img.classList.add('mb-2');
        img.style.width = '90px';
        let card_price = document.createElement('p');
        card_price.classList.add('card-text');
        card_price.textContent = `S/.${info.price}`;
        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2');
        btnAdd.textContent = 'Añadir al Carrito';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);
        btnAdd.id = "nbutton";
        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsSD.appendChild(card);
    }
}
export function render() {
    renderCPUs();
    renderInputDevices();
    renderOutputDevices();
    renderSpecialDevices();
}
