let addProducts = JSON.parse(localStorage.getItem("products"));



const panierDisplay = async () => {
    console.log("salut");
    if(addProducts){
        await addProducts;
        console.log(addProducts);

        cart__item.innerHTML = addProducts.map((products) =>`
        <article class="cart__item" data-id="${products.id}" data-color="${products.color}">
                <div class="cart__item__img">
                  <img src="${products.imageUrl}" alt="${productsData.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${productsData.name}</h2>
                    <p>Vert</p>
                    <p>${productsData.price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
        `) 
    }
};

panierDisplay();