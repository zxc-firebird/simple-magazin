class Products {
    redner() {
        let htmlCatalog = '';

        ITEMS.forEach((id, name, price, img) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}" />
                    <span>${price}</span>
                    <button>Add to cart</button>
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog};
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}


const productsPage = new Products();
productsPage.redner();