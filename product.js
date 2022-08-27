const products = window.location.search.split("?").join("");
console.log(products);

let productsData = [];

const fetchProducts = async () => {
    await fetch(`http://localhost:3000/api/products/${products}`).then((res) =>
    res.json(),
    ).then((promise) => {
        productsData = promise;
        console.log(promise);
    }); 
};

const productsDisplay = async () => {
    await fetchProducts();

    document.getElementById("item").innerHTML = `
    
    <article id="card1${productsData._id}">
            
    <div class="item__img">
      <img class="fiche_produit_img" src=${productsData.imageUrl} alt="${productsData.altTxt}">
    </div>
    <div class="item__content">
  
      <div class="item__content__titlePrice">
        <h1 id="title">${productsData.name}</h1>
        <p>Prix : <span id="price">${productsData.price}</span>€</p>
      </div>
  
      <div class="item__content__description">
        <p class="item__content__description__title">Description : ${productsData.name}</p>
        <p id="description">${productsData.description}</p>
      </div>
  
      <div class="item__content__settings">
        <div class="item__content__settings__color">
          <label for="color-select">Choisir une couleur :</label>
          <select name="color-select" id="colors">
              <option value="">--SVP, choisissez une couleur --</option>
  <!--                       <option value="vert">vert</option>
              <option value="blanc">blanc</option> -->
          </select>
        </div>
  
        <div class="item__content__settings__quantity">
          <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
          <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
        </div>
      </div>
  
      <div class="item__content__addButton">
        <button id="${productsData._id}">Ajouter au panier</button>
      </div>
  
    </div>
          </article>

    `;

    let select = document.getElementById("colors")
    console.log(select);

    console.log(productsData.colors)

    productsData.colors.forEach((colors) => {
   console.log(colors);
   let tagOption = document.createElement("option");

   tagOption.innerHTML= `${colors}`
   tagOption.value = `${colors}`

   select.appendChild(tagOption)
   console.log(tagOption);
    });
    addBasket(productsData);
};

productsDisplay(); 

const addBasket = () => {
    let bouton = document.getElementById(productsData._id);
    console.log(bouton);
    bouton.addEventListener("click", () => {
        let productsTableau = JSON.parse(localStorage.getItem("products"))
        let select = document.getElementById("colors")
        console.log(select.value);
        console.log(productsTableau);

        const fusionProductsTeinte = Object.assign({} , productsData, {
            teinte : `${select.value}`,
            quantite: 1,
        })
        console.log(fusionProductsTeinte);


        if(productsTableau == null) {
            productsTableau = [];
            productsTableau.push(productsData);
            console.log(productsTableau);
            localStorage.setItem("products", JSON.stringify(productsTableau));
        }
    })
};
