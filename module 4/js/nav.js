function createNav() {
    let nav = document.querySelector(".nav");
    nav.innerHTML = `
        <div class="nav-container">
            <!-- hamburger menu -->
            <div class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <!-- brand logo -->
            <div class="nav-brand">
                <a class="nav-brand-logo" href="#">Osmart</a>
            </div>

            <div class="nav-items">
                <!-- cart button -->
                <div class="nav-cart-btn">
                    <iconify-icon
                        class="nav-cart-icon"
                        icon="fluent:cart-16-regular"
                    ></iconify-icon>
                </div>

                <!-- search -->
                <form class="nav-search">
                    <input class="" placeholder="Search Products" />
                    <button type="submit">
                        <iconify-icon icon="ion:search-outline"></iconify-icon>
                    </button>
                </form>
            </div>
        </div>
    `;
    const cart = document.querySelector(".cart");
    const cartButton = document.querySelector(".nav-cart-btn");
    cartButton.addEventListener("click", () => {
        if (cart.classList.contains("hidden")) {
            cart.classList.remove("hidden");
        } else {
            cart.classList.add("hidden");
        }
    });
}

createNav();
