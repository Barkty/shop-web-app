localStorage.clear();
// Define array
const shopArray = [];

var shopObj = {};

// Get data from form, inputs
var addToShopList = document.getElementById('#shop-form');

var inputName = document.querySelector('inputName');

var inputQuantity = document.querySelector('inputQuantity');

var inputDesc = document.querySelector('inputDesc');

var listBody = document.querySelector('divBody');

document.getElementById('addButton').addEventListener('click', function (e) {
	alert("Hello world");
// Do not submit the form
e.preventDefault();

//Ignore it if shop list is empty
if(inputName.value == "" && inputQuantity.value == "" && inputDesc.value == "" ) return;

// Get value of form

// Set form to an object
var shopList = {};
shopList.itemName = inputName;
shopList.itemQuantity = inputQuantity;
shopList.itemDesc = inputDesc;

console.log(shopList);
// Push object to an Array
shopArray.push(shopList);

console.log(shopArray);

listBody.innerHTML += "<h2>" + shopArray[0].itemName + "</h2><br/>";
listBody.innerHTML += "<p>" + shopArray[0].itemQuantity + "</p><br/>";
listBody.innerHTML += "<h3>" + shopArray[0].itemDesc + "</h3><br/>";
listBody.innerHTML += "<button class='btn'>" + 'Done' + "</button>"
listBody.innerHTML += "<hr/>";

//Clear input
inputName.value && inputQuantity.value && inputDesc.value == "";

// Save the list to localStorage
localStorage.setItem('inputItems', JSON.stringify(listBody
  .innerHTML));

}, false);

//Check for saved shopping items
var saved = JSON.parse(localStorage.getItem('inputItems'));

//If there are any saved items, update our list
if (saved) {
  listBody.innerHTML = saved;
};

// Log local storage
alert(localStorage);




















//-----Wrong code zone---------

let shop = Array.from(document.querySelectorAll('#shop-form input')).reduce((acc, input) => ({...acc, [input.id]: input.value}),{});

// Shopping list object

// Assign form data to object var
// Display shopping list on window
 displayList = (itemName, itemQuant, itemDesc) => {
  document.getElementById(itemName).innerHTML = shopList.num1.name;
  document.getElementById(itemQuant).innerHTML = shopList.num1.quantity;
  document.getElementById(itemDesc).innerHTML = shopList.num1.description;
 }
displayList("list-name", "list-quantity", "list-description");

// Display form data in table

//Submit form
subMit = () => {
 document.getElementById("shop-form").submit;
}
subMit();

// Event handler
addList = (buttonn) => {
	document.getElementById('add').addEventListener('click', displayList);
};
addList();

