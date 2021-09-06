let carList = ["BMW", "Volvo", "Mercedes", "Audi"];
let fruitList = ["Apple", "Banana", "Orange", "Peach"];
let cityList = ["Paris", "London", "New York", "Tokyo"];

let text = document.getElementById("inputText");
let selectedOption =document.getElementById("dropdownMenu");
let itemDiv = document.getElementById("items");


document.getElementById("filterButton").addEventListener("click", (e) => {
    e.preventDefault();

    console.log(selectedOption);
    if (selectedOption.value == "car") {
        showCars();
    }
    else if (selectedOption.value == "fruit") {
        showFruit();
    }
    else if (selectedOption.value == "city") {
        showCity();
    }
});


document.getElementById("addButton").addEventListener("click", (e) => {
    e.preventDefault();
   
    if(text.value == ""){
        alert("You must enter text in input field!");
    }
    else {
        if (selectedOption.value == "car") {
            carList.push(text.value);
        }

        else if (selectedOption.value == "fruit") {
            fruitList.push(text.value);
        }

        else if (selectedOption.value == "city") {
            cityList.push(text.value);
        }
    }
    text.value = "";
});


function showCars() {
    itemDiv.innerText = "";
    carList.forEach(element => {
        let listItem = document.createElement("li");
        listItem.innerText = element;
        itemDiv.appendChild(listItem);
    });
    
}

function showFruit() {
    itemDiv.innerText = "";
    fruitList.forEach(element => {
        let listItem = document.createElement("li");
        listItem.innerText = element;
        itemDiv.appendChild(listItem);
    });
}

function showCity() {
    itemDiv.innerText = "";
    cityList.forEach(element => {
        let listItem = document.createElement("li");
        listItem.innerText = element;
        itemDiv.appendChild(listItem);
    });
}