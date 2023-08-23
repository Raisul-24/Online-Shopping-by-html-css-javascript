// Product-1
document.getElementById('product-one').addEventListener('click', function () {
        const price = document.getElementById('price-1');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p1-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-2
document.getElementById('product-two').addEventListener('click', function () {
        const price = document.getElementById('price-2');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p2-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-3
document.getElementById('product-three').addEventListener('click', function () {
        const price = document.getElementById('price-3');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p3-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-4
document.getElementById('product-four').addEventListener('click', function () {
        const price = document.getElementById('price-4');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p4-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-5
document.getElementById('product-five').addEventListener('click', function () {
        const price = document.getElementById('price-5');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p5-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-6
document.getElementById('product-six').addEventListener('click', function () {
        const price = document.getElementById('price-6');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p6-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-7
document.getElementById('product-seven').addEventListener('click', function () {
        const price = document.getElementById('price-7');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p7-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-8
document.getElementById('product-eight').addEventListener('click', function () {
        const price = document.getElementById('price-8');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p8-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})
// product-9
document.getElementById('product-nine').addEventListener('click', function () {
        const price = document.getElementById('price-9');
        const p = parseFloat(price.innerText);
        // name
        const productName = document.getElementById('p9-Name');
        const pName = productName.innerText;
        productAddEntry(pName);
        calculateTotalPrice(p);
})

// add to calculation entry
function productAddEntry(productName) {
        const productEntry = document.getElementById('product-entry');
        const count = productEntry.childElementCount;
        // create element to add
        const p = document.createElement('p');
        p.classList.add('my-4');
        // create innerHtml to show dynamic
        p.innerHTML = `${count + 1}. ${productName} `;
        // connection with child
        productEntry.appendChild(p)

}
// calculation total price
let totalPrice = 0;
let discount = 0;
function calculateTotalPrice(price) {
        totalPrice += price;
        document.getElementById('totalPrice-field').textContent = totalPrice;
        calculateDiscountPrice();
        calculateTotalNetPrice();

        checkoutApplyButton();
        checkoutPurchaseButton();
}
//  calculate discount and check condition
function calculateDiscountPrice() {
        const couponInput = document.getElementById('coupon-input').value;
        if (totalPrice >= 200 && couponInput === "SELL200") {
                const discountFloat = totalPrice * 0.2;
                discount = discountFloat.toFixed(2);
        } else {
                discount = 0;
        }
        const discountElement = document.getElementById("discountPrice-field");
        discountElement.textContent = discount;
}
// calculate net price from total
function calculateTotalNetPrice() {
        const netPrice = totalPrice - discount;
        const totalPriceElement = document.getElementById('netPrice-field');
        totalPriceElement.textContent = netPrice;
}
// activate the purchase button if total price is greater than 0
function checkoutPurchaseButton() {
        const purchaseButton = document.getElementById('checkoutButton');
        if (totalPrice > 0) {
                purchaseButton.removeAttribute("disabled");
        } else {
                purchaseButton.setAttribute("disabled", "true");
        }
}
// activate the apply button if total price is above 200
function checkoutApplyButton() {
        const applyButton = document.getElementById('apply-coupon');
        if (totalPrice >= 200) {
                applyButton.removeAttribute("disabled");
        } else {
                applyButton.setAttribute("disabled", "true");
        }
}
// Coupon validation
document.getElementById("apply-coupon").addEventListener("click", function () {
        calculateDiscountPrice();
        calculateTotalNetPrice();
});

//  reload page
function reloadPage() {
        location.reload();
}
