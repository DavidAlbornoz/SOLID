import { Computer } from './class/Computer.js';
import { Proforma } from './class/Proforma.js';
import { allDB } from './ComponentesDB/AllDB.js';
import { CPU_DB } from './ComponentesDB/CPU_DB.js';
import { InputDevicesDB } from './ComponentesDB/InputDevicesDB.js';
import { OutputDevicesDB } from './ComponentesDB/OutputDevicesDB.js';
import { SpecialDevicesDB } from './ComponentesDB/SpecialDevicesDB.js';
//import { addComponent } from '../index.js'
let computer = new Computer();
let proforma = new Proforma();
let IdsAddedComponents = [];
// HTML Elements
let $proforma = document.querySelector('#proforma');
let $TotalPrice = document.querySelector('#total');
// Verify
let $BtnComprobar = document.querySelector('#BtnComprobar');
$BtnComprobar.addEventListener('click', verify);
let $Modal_Content = document.querySelector('#Modal-Content');
let $Modal_Message = document.createElement('div');
$Modal_Message.classList.add('modal-body', 'text-center');
let $Modal_Image = document.querySelector('#Modal-Image');
let $Modal_Img = document.createElement('img');
$Modal_Img.classList.add('my-4', 'w-90px');
let $Modal_Btn = document.querySelector('#Modal-button');
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
render();
function renderProforma() {
    // Id de los componentes renderizados en proforma:
    console.log(IdsAddedComponents);
    $proforma.textContent = '';
    for (const component of computer.componentsOfComputer) {
        let itemProforma = document.createElement('li');
        itemProforma.classList.add('list-group-item', 'text-right', 'mx-2');
        itemProforma.textContent = `${component.name}-${component.brand}: S/.${component.price}.00`;
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.textContent = 'X';
        btnDelete.style.marginLeft = '1rem';
        btnDelete.setAttribute('identificador', `${component.id}`);
        btnDelete.addEventListener('click', deleteComponent);
        itemProforma.appendChild(btnDelete);
        $proforma.appendChild(itemProforma);
    }
    // Calculando el Precio Total
    proforma.calculatorPrice(computer.componentsOfComputer);
    $TotalPrice.textContent = `${proforma.FinalPrice}`;
}
function deleteComponent() {
    let id = this.getAttribute('identificador');
    let idNotNull = id ? id : '';
    let IdNumber = Number.parseInt(idNotNull);
    for (const IDs of IdsAddedComponents) {
        if (IDs === idNotNull) {
            let index = IdsAddedComponents.indexOf(IDs);
            // Removemos del array de puros id
            IdsAddedComponents.splice(index, 1);
            // Removemos el componente de computer
            // Componente Removido: allDB[id-1]
            computer.removeComponent(allDB[IdNumber - 1]);
        }
    }
    renderProforma();
}
export function addComponent() {
    // > typeOf(id) = String
    let id = this.getAttribute('identificador');
    let idNotNull = id ? id : '';
    // Agregamos al array de puros id, recibe un String
    IdsAddedComponents.push(idNotNull);
    // Agregamos el componente a computer
    // Componente Agregado: allDB[id-1]
    let IdNumber = Number.parseInt(idNotNull);
    computer.addComponent(allDB[IdNumber - 1]);
    renderProforma();
}
/*function renderModal() {
    $Modal_Btn.classList.remove('btn-outline-danger')
    $Modal_Btn.classList.remove('btn-outline-success')
    if (computer.isValidate) {
        $Modal_Message.textContent='The minimum computer requirements WERE MET.';
        $Modal_Img.src='https://image.flaticon.com/icons/svg/391/391175.svg'
        $Modal_Btn.classList.add('btn-outline-success')
    }else{
        $Modal_Message.textContent='The minimum computer requirements WERE NOT MET.';
        $Modal_Img.src='https://image.flaticon.com/icons/svg/391/391116.svg'
        $Modal_Btn.classList.add('btn-outline-danger')
    }
    $Modal_Content.appendChild($Modal_Message)
    $Modal_Image.appendChild($Modal_Img)
}*/
let m = document.querySelector("#Message");
let p = document.createElement("p");
m.appendChild(p);
function verify() {
    computer.iValidator();
    //let v = computer.isValidate
    p.textContent = "";
    if (computer.isValidate) {
        console.log(" Es correcto");
        p.textContent = "Su compra es correcta";
    }
    else {
        console.log(" Faltan componentes");
        p.textContent = "Faltan componentes";
    }
    //renderModal()
}
