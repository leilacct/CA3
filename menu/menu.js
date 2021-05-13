function UpdateCost() {
    var sum = 0;
    var item, el;
    for (i = 0; i < 5; i++) {
        item = 'item' + i;
        el = document.getElementById(item);
        if (el.checked == true) {
            sum += Number(el.value);
        }
    }
    document.getElementById('totalcost').value = sum.toFixed(2);
}
