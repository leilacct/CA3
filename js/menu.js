

//  The function that calculates the bill
//  Each catogory on the menu options was set as a class to make it easier to split it
var total_items = 16; //There are 16 options on the menu

function CalculateItemsValue() {
    var total = 0;
    var isVegetarian = false; //Set to false because it's less options
    for (let i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);

        if (itemID.className == "starter") {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        elseif(itemID.className == "main"); {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        elseif(itemID.className == "dessert"); {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        elseif(itemID.className == "drinks"); {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        //To get the vegetarian cost
        elseif(itemID.isVegetarian == true); {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        //If the item is not vegetarian
        else {
            ((itemID.className == "starter") && (itemID.className == "main") && (!isVegetarian == true));
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        };
    };
    document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
});