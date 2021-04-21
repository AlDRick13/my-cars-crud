'use strict';

const cars = [
    {
        id: 1,
        brand: 'Chop Chop',
        model: 'Cobra',
        color: 'Rosa Metal',
        year: 2021,
        price: 7999,
        photo: '//cdn.shopify.com/s/files/1/2115/2571/products/General-cobra_61892fb6-0d09-47c7-88ad-91764e3606f0_800x.png?v=1612570460'
    },
    
    {
        id: 2,
        brand: 'GMC',
        model: 'Delorean',
        color: 'Silver',
        year: 1985,
        price: 1999999,
        photo: 'https://www.hdcarwallpapers.com/thumbs/2019/delorean_dmc_12_back_to_the_future_4k_3-t2.jpg'
    },

    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Challenger',
        color: 'Negro',
        year: 1970,
        price: 216000,
        photo: 'https://img.motoryracing.com/noticias/portada/23000/23698-n.jpg'
    },

    {
        id: 4,
        brand: 'Ferrari',
        model: 'Horse',
        color: 'Brown',
        year: 2021,
        price: 120000,
        photo: 'https://images5.alphacoders.com/347/thumb-1920-347516.jpg'
    }
];

const EDIT = 'Edit';
const CREATE = 'Create';

function printCar (dataCars){
    const container = document.getElementById('cars-container');
    container.innerHTML = ('');
    dataCars.forEach((car) => {
        const htmlCar = `<div class="car-card " style="width: 18rem;">
        <img src="${car.photo}" class="card-img-top" alt="...">
        <div class="card-body ">
        <div class="text-center">
        <h2>${car.model}</h2>
        </div>
        <div>Brand: ${car.brand}</div>
        <div>Color: ${car.color}</div>
        <div>Year: ${car.year} </div>
        <div>Price: ${car.price} MXN</div>
        <div><button class="btn btn-danger" onclick="deleteCar(${car.id})">Eliminar</button>
        </div>
        <div><button class="btn btn-warning" onclick="showEditCar(${car.id})">Editar</button></div>
      </div>`
      container.innerHTML += htmlCar;
    });
}

function addCar(){
    const inputBrand = document.getElementById('brand');
    const inputModel = document.getElementById('model');
    const inputColor = document.getElementById('color');
    const inputYear = document.getElementById('year');
    const inputPrice = document.getElementById('price');
    const inputPhoto = document.getElementById('photo');
    const carBrand = inputBrand.value;
    const carModel = inputModel.value;
    const carColor = inputColor.value;
    const carYear = inputYear.value;
    const carPrice = inputPrice.value;
    const carPhoto = inputPhoto.value;
    const newCar = {
        // id: generateID(),
        brand: carBrand,
        model: carModel,
        color: carColor,
        year: carYear,
        price: carPrice,
        photo: carPhoto,
    }
    cars.push(newCar);
    printCar(cars);
    resetForm();
    hideFormConatiner();

}

function generateID(){
    let biggerID = 0;
    cars.forEach((car) => {
        if(car.id > biggerID){
            biggerID = car.id;
        }
    })
    return biggerID + 1;
}

function deleteCar(id){
    const index = cars.findIndex((car) => car.id === id)
    cars.splice(index, 1);
    printCar(cars);
}

function showEditCar(id){
    const index = cars.findIndex((car) => car.id === id)
    const car = cars[index];
    const inputBrand = document.getElementById('brand').value = car.brand;
    const inputMarca = document.getElementById('model').value = car.model;
    const inputColor = document.getElementById('color').value = car.color;
    const inputAño = document.getElementById('year').value = car.year;
    const inputPrecio = document.getElementById('price').value = car.price;
    const inputPhoto = document.getElementById('photo').value = car.photo;
    showFormContainer();
    changeBtnToEdit();
}

function editCar(){
    cars[0].brand = document.getElementById('brand').value;
    cars[0].model = document.getElementById('model').value;
    cars[0].color = document.getElementById('color').value;
    cars[0].year = document.getElementById('year').value;
    cars[0].price = document.getElementById('price').value;
    cars[0].photo = document.getElementById('photo').value;
    resetForm();
    hideFormConatiner();
    printCar(cars);
}

function resetForm(){
    document.getElementById('car-form').reset();
}

function hideFormConatiner(){
    document.getElementById('create-car-container').classList.add('d-none');
}

function showFormContainer(){
    document.getElementById('create-car-container').classList.remove('d-none');
    changeBtnToCreate();
}

function changeBtnToEdit(){
    const button = getFormButton();
    button.innerHTML = 'Editar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-outline-success');
    button.value = EDIT;
 }
 //CAMBIAR TEXTO BOTON DEL FORMULARIO A CREAR
 function changeBtnToCreate(){
     const button = getFormButton();
     button.innerHTML = 'Guardar';
     button.classList.remove('btn-outline-success');
     button.classList.add('btn-primary');
     button.value = CREATE;
 }
 //COMPORTAMIENTO DEL BOTON DEL FORMULARIO
  function buttonCar(){
      const buttonValue = getFormButton().value;
      if(buttonValue === EDIT){
          editCar(); //AQUI SE DEBERIA EJECUTAR EL UPDATE
      } else {
          addCar();
      }
  }
  function getFormButton(){
    return document.getElementById('button-car-form');
  }
printCar(cars);