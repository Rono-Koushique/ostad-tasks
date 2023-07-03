import { cart } from "./cart.js";
import { elementFromHtml } from "./utils.js";

let products = [];

function createProductCard(product) {
    const productCard = elementFromHtml(`
        <div class="product">
            <img src=${product.images[0]} class="product--image" />
            <div class="product--details">
                <h2 class="product--title">${product.title}</h2>
                <div style="margin-top: auto">
                    <h3 class="product--price">
                        <span class="main">${product.priceOff}</span>
                        <span class="discount">${product.price}</span>
                    </h3>
                </div>
                <button class="product--add-btn">Add To Cart</button>
            </div>
        </div>;
    `);
    return productCard;
}

function renderProducts() {
    const productList = document.querySelector("#product-list");
    const existingListItems = Array.from(
        productList.querySelectorAll(".product")
    );

    products.forEach((product, idx) => {
        const existingListItem = existingListItems[idx];
        const newListItem = createProductCard(product);
        newListItem
            .querySelector(".product--add-btn")
            .addEventListener("click", () => {
                cart.addProductToCart(product);
            });

        if (existingListItem) {
            if (!existingListItem.isEqualNode(newListItem)) {
                existingListItem.replaceWith(newListItem);
            }
        } else {
            productList.appendChild(newListItem);
        }
    });

    if (existingListItems.length > products.length) {
        existingListItems.slice(products.length).forEach((item) => {
            item.remove();
        });
    }
}

async function getProducts() {
    document.cookie = "cookieName=cookieValue; SameSite=Strict";
    let res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
}

getProducts().then((data) => {
    products = data;
    products.forEach((product) => {
        const mainPrice = parseFloat(product.price).toFixed(2);
        const deductedPrice = parseFloat(
            mainPrice -
                mainPrice * (parseFloat(product.discountPercentage) / 100)
        ).toFixed(2);
        const priceOff = parseFloat(deductedPrice);
        product["priceOff"] = priceOff;
    });
    renderProducts();
});
