let productsData = [];
 
const fetchProducts = async ()=> {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        productsData = promise;
        console.log(productsData);
    });
};

const productsDisplay = async () => {
    await fetchProducts();
    
    document.getElementById("items").innerHTML = productsData.map((products) => `
    
    <article id="card${products.id}" class="cart__item">
    <h3 class="card_title">${products.name.toUpperCase() }</h3>
    <img class="cart__item__img" src"${products.imageUrl}" alt="${products.altTxt}"/>
    <div class="bouton-chene">Kanap</div>
    <p class="cart__item__content">${products.description}</p>
    <button id="${products._id}" class="button-details">Voir</button>
    <p class="cart__price">${products.price}€</p>
    </article>
    
    `,
    ).join("");

    let button = document.querySelectorAll(".button-details")
    console.log(button);

    button.forEach((button) =>
    button.addEventListener("click" , () => {
        console.log(button);

        window.location = `product.html?${button.id}`
    }),
    );
};

productsDisplay();

