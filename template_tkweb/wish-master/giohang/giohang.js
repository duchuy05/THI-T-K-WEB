document.addEventListener('DOMContentLoaded', function() {
    formatGrandTotal();
});

function formatGrandTotal() {
    const grandTotalElement = document.querySelector('.grand-total');
    const grandTotal = parseInt(grandTotalElement.textContent);
    grandTotalElement.textContent = grandTotal.toLocaleString('en-US');
}

function updateGrandTotal() {
    let grandTotal = 0;
    const totalPrices = document.querySelectorAll('.total-price');
    totalPrices.forEach(priceElement => {
        grandTotal += parseInt(priceElement.textContent);
    });
    const grandTotalElement = document.querySelector('.grand-total');
    grandTotalElement.textContent = grandTotal.toLocaleString('en-US');
}

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
    updateTotalQuantity();
}

function removeItem(button) {
    const cartItem = button.closest('.cartItem');
    cartItem.remove();
    updateGrandTotal();
    updateTotalQuantity()
}

function updateTotalQuantity() {
    let totalQuantity = 0;
    const quantities = document.querySelectorAll('.quantity-input');
    quantities.forEach(quantityInput => {
        totalQuantity += parseInt(quantityInput.value);
    });
    document.querySelector('.total-quantity').textContent = totalQuantity;
}