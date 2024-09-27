let cartCounter = 0
function addCart() {
    cartCounter +=1;
    document.getElementById("cart-counter").innerText = cartCounter;
}

window.onload = function () {
    let botaoAdiciona = document.getElementsByClassName("add-cart-btn");

    for (let i = 0; i < botaoAdiciona.length; i++) {
        botaoAdiciona[i].onclick = function () {
            addCart();
            console.log("funcionou");
        };
    }
}
