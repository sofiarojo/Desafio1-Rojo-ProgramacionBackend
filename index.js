class ProductManager {
    #products;
    #productIdCounter;

    constructor() {
        this.#products = [];
        this.#productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
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
        console.log("Producto agregado correctamente:", product);
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const product = this.#products.find((product) => product.id === id);

        if (!product) {
            console.error("Not found.");
        }

        return product;
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct("Producto prueba 1", "Descripcion 1", 10, "img1.jpg", "abc123", 50);
productManager.addProduct("Producto prueba 2", "Descripcion 2", 15, "img2.jpg", "def456", 30);

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));  //Acá mostrará un error