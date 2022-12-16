import {Bike, save} from './itemsController.js';

// Initialize a new TaskManager with currentId set to 0
const itemsController = new Bike();
//create a variable for class array 
const newBikes = itemsController.newBikes;
//select the form
const newItemForm = document.querySelector('#newItemForm');
// Select the inputs
const newItemName = document.querySelector('#name');
const newItemDescription = document.querySelector('#description');
const newItemPrice = document.querySelector('#price');
const newItemImg = document.getElementById("img");



//save input into local storage
function saveToLocal () {
    for(let item of newBikes) { //iterate thru each item(keys: names,description,price)
        for(let key in item){ //iterate thru each key values(user's input)
            localStorage.setItem(key,JSON.stringify(item[key])) //saves to local storage as key:value
        }
    }
}

//function to perform when submitting form
newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
// Add the bike to the itemsController
    itemsController.addBike(newItemName.value, newItemDescription.value, newItemImg.value, newItemPrice.value);
//save to local storage
    saveToLocal();
    console.log("worked")
//save to database
    save(newItemName.value, newItemDescription.value, newItemImg.value, newItemPrice.value);

// Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
    newItemPrice.value = '';
    newItemImg.value = '';

});