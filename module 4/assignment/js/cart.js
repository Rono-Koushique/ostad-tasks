import { elementFromHtml } from "./utils.js";

function createCart() {
    const cart = document.querySelector(".cart");
    const overlay = elementFromHtml(`
        <div class="cart--overlay"></div>
    `);
    const content = elementFromHtml(`
        <div class="cart--container">
            <div class="cart--header">
                <h1 class="cart--title">Cart Products</h1>
                <button class="cart--clear-btn">Clear</button>
            </div>
            <div class="cart--list"></div>
            <div class="cart--footer">
                Total Price: <span class="cart--total"></span>
            </div>
        </div>
    `);
    cart.appendChild(overlay);
    cart.appendChild(content);
}

class Cart {
    constructor() {
        this.productList = [];
        this.main = document.querySelector(".cart");
        this.overlay = document.querySelector(".cart--overlay");
        this.list = document.querySelector(".cart--list");
        this.clearBtn = document.querySelector(".cart--clear-btn");
        this.counter = document.querySelector(".nav-cart-button::after");
        this.totalCount = 0;
        this.cartTotal = 0;
        this.overlay.addEventListener("click", () => {
            this.toggle();
        });
        this.clearBtn.addEventListener("click", () => {
            this.list.innerHTML = "";
        });
    }

    toggle() {
        if (this.main.classList.contains("hidden")) {
            this.main.classList.remove("hidden");
        } else {
            this.main.classList.add("hidden");
        }
    }

    updateTotalPrice() {
        this.cartTotal = this.productList.reduce((total, product) => {
            return (total += product.quantity * product.priceOff);
        }, 0);
        const cartTotalDom = document.querySelector(".cart--total");
        cartTotalDom.innerText = (this.cartTotal).toFixed(2);
    }

    extractElements(productCard) {
        const image = productCard.querySelector(".cart-product--image");
        const title = productCard.querySelector(".cart-product--title");
        const quantity = productCard.querySelector(".cart-product--quantity");
        const price = productCard.querySelector(".cart-product--price");
        const total = productCard.querySelector(".cart-product--total");
        const increase = productCard.querySelector(".cart-product--increase");
        const decrease = productCard.querySelector(".cart-product--decrease");
        return { image, title, quantity, price, total, increase, decrease };
    }

    updateProductCardInDom(product) {
        const productCardQuantity = this.list.querySelector(
            `.cart-product[data-product-id="${product.id.toString()}"] .cart-product--quantity`
        );
        const productCardTotal = this.list.querySelector(
            `.cart-product[data-product-id="${product.id.toString()}"] .cart-product--total`
        );
        productCardQuantity.innerText = product.quantity;
        productCardTotal.innerText = parseFloat(
            product.quantity * product.priceOff
        ).toFixed(2);
    }

    increaseProductInCart(product) {
        product.quantity += 1;
        this.renderCart();
    }

    decreaseProductInCart(product) {
        if (product.quantity > 0) {
            product.quantity -= 1;
            this.updateProductCardInDom(product);
            this.renderCart();
        }
    }

    createProductCard(product) {
        const card = elementFromHtml(`
            <div class="cart-product" data-product-id=${product.id}>
                <img src=${product.images[0]} class="cart-product--image" alt=${
            product.title
        } />
                <div class="cart-product--details">
                    <span class="cart-product--title">${product.title}</span>
                    <div class="cart-product--quantity-details">
                        <div class="cart-product--quantity-holder">
                            <span class="cart-product--quantity">${
                                product.quantity
                            }</span>
                            <div class="cart-product--increase no-select">+</div>
                            <div class="cart-product--decrease no-select">-</div>
                        </div>
                        <span class="cart-product--price">${
                            product.priceOff
                        }</span>
                    </div>
                </div>
                <div class="cart-product--total">${(
                    product.priceOff * product.quantity
                ).toFixed(2)}</div>
            </div>
        `);
        const { increase, decrease } = this.extractElements(card);
        increase.addEventListener("click", () => {
            this.increaseProductInCart(product);
        });
        decrease.addEventListener("click", () => {
            this.decreaseProductInCart(product);
        });
        return card;
    }

    renderCart() {
        const existingListItems = Array.from(
            this.list.querySelectorAll(".cart-product")
        );
        this.productList.forEach((product, idx) => {
            const existingListItem = existingListItems[idx];
            const newListItem = this.createProductCard(product);

            if (existingListItem) {
                if (existingListItem.dataset.productId !== product.id) {
                    existingListItem.replaceWith(newListItem);
                } else {
                    existingListItem.querySelector(
                        ".cart-product--quantity"
                    ).innerText = product.quantity;
                }
            } else {
                this.list.appendChild(newListItem);
            }
        });

        if (existingListItems.length > this.productList.length) {
            existingListItems.slice(this.productList.length).forEach((item) => {
                item.remove();
            });
        }

        this.updateTotalPrice();
    }

    existsInList(productId) {
        return this.productList.filter((product) => product.id === productId);
    }

    addProductToCart(product, quantity = 1) {
        const productCard = this.existsInList(product.id)[0];
        if (productCard) {
            productCard.quantity += quantity;
        } else {
            this.productList.push({ ...product, quantity: 1 });
        }
        this.renderCart();
    }
}

createCart();
export const cart = new Cart();
