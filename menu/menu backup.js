// function UpdateCost() {
//     var sum = 0;
//     var item, el;
//     for (i = 0; i < 5; i++) {
//         item = 'item' + i;
//         el = document.getElementById(item);
//         if (el.checked == true) {
//             sum += Number(el.value);
//         }
//     }
//     document.getElementById('totalcost').value = sum.toFixed(2);
//}

console.log('test');
//UpdateCost function with EventListener
function UpdateCost() {
    var sum = 0;
    var item, el;
    for (i = 0; i < 16; i++) {
        item = 'item' + i;
        el = document.getElementById(item);
        if (el.checked == true) {
            sum += Number(el.value);
        }
    }
    document.getElementById('totalcost').value = sum.toFixed(2);
}

document.querySelectorAll('[id^="item"]').forEach(item => {
    item.addEventListener('click', UpdateCost);
});


function filterMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
        (option) => option.isVegetarian === true
    );

    vegetarianOptions.forEach((option) => {
        let dish = document.createElement("li");
        dish.textContent = option.name + " price: " + option.price.toFixed(2);
        menuNode.appendChild(dish);
    });
}

/*
function filterMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const dessertOptions = menu.filter(
        (option) => option.isDessert === true
    );

    dessertOptions.forEach((option) => {
        let dish = document.createElement("li");
        dish.textContent = option.name + " price: " + option.price.toFixed(2);
        menuNode.appendChild(dish);
    });
}


filterMenu([
    //Starters
    {
        name: "Soup of the Day", //Special mix of veggies ingredients
        isVegetarian: true,
        price: 1.00
    },
    {
        name: "Mezze Board", //Brie Cheese, Red Cheddar, Hummus, Bread Stick wrapped with Parm Ham
        isVegetarian: false,
        price: 1.00
    },
    {
        name: "Beer Battered Shirimp", //Made with special beer batter and served with sweet chilli dipping sauce
        isVegetarian: false,
        price: 1.00
    },
    //Main
    {
        name: "Crisp Chicken Wings", //Spicy or BBQ with blue cheese dip
        isVegetarian: false,
        price: 1.00
    },
    {
        name: "Traditional Fish and Chips", //Beer battered cod with tarter sauce with french fries
        isVegetarian: false,
        price: 1.00
    },
    {
        name: "Pasta Tagliatelle", //Sauteed mushroom, peas, white wine cream sauce and shaved parmesan cheese
        isVegetarian: true,
        price: 1.00
    },
    {
        name: "Rib Eye Steak", //Served with portobello mushroom, aspargus, baked tomato. Choice of garlic butter or peppercorn sauce
        isVegetarian: false,
        price: 1.00
    },
    {
        name: "Pan Fried Irish Angus Steak Ciabata", // Served with sauteed onion and peppercorn sauce
        isVegetarian: false,
        price: 1.00
    },
    {
        name: "Goat Cheese & Beetroot Salad", //Served on a bed of house salad
        isVegetarian: true,
        price: 1.00
    },

    //Desserts
    {
        name: "Buttermilk panna cotta", //Gelatine, orange gel, thyme & rosemary caramel, white chocolate
        isDessert: true,
        price: 1.00
    },
    {
        name: "Bailey's Cheesecake", //Made with white chocolate and served with ice cream
        isDessert: true,
        price: 1.00
    },
    {
        name: "Warm Chocolate Brownie", //Served with vanilla ice cream
        isDessert: true,
        price: 1.00
    },

    //Drinks
    {
        name: "Soft Drinks", //Fanta, Coca-Cola, Sprite
        isDrink: true,
        price: 1.00
    },
    {
        name: "Juices", //Orange, Apple, Cranberry, Pineapple
        isDrink: true,
        price: 1.00
    },
    {
        name: "Cocktails", //Mojito, Esspresso Martini, Strawberry Daiquiri, Aperol Spritz
        isDrink: true,
        price: 1.00
    },

]);

*/