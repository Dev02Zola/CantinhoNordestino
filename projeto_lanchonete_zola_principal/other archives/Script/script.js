let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }





// Função para adicionar um item ao carrinho
function addItemToCart(name, price) {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Criar um novo elemento de item de carrinho
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
        <span>${name}</span>
        <span>R$ ${price}</span>
        <button class="remove-item" onclick="removeItemFromCart(this)">Remover</button>
    `;

    // Adicionar o item ao carrinho
    cartItems.appendChild(cartItem);

    // Atualizar o total do carrinho
    const currentTotal = parseFloat(cartTotal.textContent);
    const itemPrice = parseFloat(price);
    const newTotal = currentTotal + itemPrice;
    cartTotal.textContent = newTotal.toFixed(2); // Arredonda para 2 casas decimais
}

// Função para remover um item do carrinho
function removeItemFromCart(button) {
    const cartItem = button.parentElement;
    const cartTotal = document.getElementById("cart-total");

    // Obter o preço do item a ser removido
    const itemPrice = parseFloat(cartItem.querySelector("span:last-child").textContent.slice(2));

    // Remover o item do carrinho
    cartItem.remove();

    // Atualizar o total do carrinho
    const currentTotal = parseFloat(cartTotal.textContent);
    const newTotal = currentTotal - itemPrice;
    cartTotal.textContent = newTotal.toFixed(2); // Arredonda para 2 casas decimais
}

// Limpar o carrinho
document.getElementById("clear-cart").addEventListener("click", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Remover todos os itens do carrinho
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    // Atualizar o total do carrinho para zero
    cartTotal.textContent = "0.00";
});






document.addEventListener("DOMContentLoaded", function () {
    
        // Função para abrir o modal de pagamento
        function openPaymentModal() {
            var modal = document.getElementById("payment-modal");
            modal.style.display = "block";
        }
        
        // Função para fechar o modal
        function closePaymentModal() {
            var modal = document.getElementById("payment-modal");
            modal.style.display = "none";
        }
        
        // Event listener para abrir o modal quando um produto é clicado
        var addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach(function(button) {
            button.addEventListener("click", openPaymentModal);
        });
        
        // Event listener para fechar o modal quando o usuário clica em "X"
        var closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", closePaymentModal);
        var paymentMethods = document.querySelectorAll(".payment-method");
        paymentMethods.forEach(function(button) {
            button.addEventListener("click", function() {
                var selectedMethod = button.getAttribute("data-method");
                var paymentDetails = document.querySelectorAll(".payment-details");
                paymentDetails.forEach(function(detail) {
                    detail.style.display = "none";
                });
                if (selectedMethod === "cartao") {
                    document.getElementById("cartao-details").style.display = "block";
                } else if (selectedMethod === "pix") {
                    document.getElementById("pix-details").style.display = "block";
                } else if (selectedMethod === "qr") {
                    document.getElementById("qr-details").style.display = "block";
                }
            });
        });
        document.getElementById("cartao-pagar").addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("cartao-details").style.display = "none";
            alert("Pagamento com Cartão de Crédito efetuado com sucesso!");
            closePaymentModal();
        });
        document.getElementById("pix-pagar").addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("pix-details").style.display = "none";
            alert("Pagamento com Pix efetuado com sucesso!");
            closePaymentModal();
        });
        document.getElementById("qr-pagar").addEventListener("click", function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica real para processar o pagamento com QR Code
            // Por enquanto, estamos apenas ocultando os detalhes
            document.getElementById("qr-details").style.display = "none";
            alert("Pagamento com QR Code efetuado com sucesso!");
            closePaymentModal();
        });

});
