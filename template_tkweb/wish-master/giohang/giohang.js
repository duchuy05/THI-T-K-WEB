function decreaseQuantity(button) {
    const input = button.nextElementSibling;
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotal(input);
    }
}

function increaseQuantity(button) {
    const input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    updateTotal(input);
}

function updateTotal(input) {
    const cartItem = input.closest('.cartItem');
    const unitPrice = parseInt(cartItem.querySelector('.unit-price').textContent);
    const totalPriceElement = cartItem.querySelector('.total-price');
    const quantity = parseInt(input.value);
    const totalPrice = unitPrice * quantity;
    totalPriceElement.textContent = totalPrice;
    updateGrandTotal();
}

function updateGrandTotal() {
    let grandTotal = 0;
    const totalPrices = document.querySelectorAll('.total-price');
    totalPrices.forEach(priceElement => {
        grandTotal += parseInt(priceElement.textContent);
    });
    document.querySelector('.grand-total').textContent = grandTotal;
}

function removeItem(button) {
    const cartItem = button.closest('.cartItemListNo');
    cartItem.remove();
    updateGrandTotal();
}
