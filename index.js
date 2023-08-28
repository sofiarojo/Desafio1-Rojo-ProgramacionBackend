class ProductManager {
    #products;
    #productIdCounter;

    constructor() {
        this.#products = [];
        this.#productIdCounter = 1;
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }
        if (this.#products.some((product) => product.code === code)) {
            console.error("Ya existe un producto con ese código.");
            return;
        }

        const product = {
            id: this.#productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.#products.push(product);
    }
}