import * as products from "./products.json";

class Product {
  static findProductsBelow(precioBase:number){
    return products.find(item => item.price <= precioBase)
  }
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    this.products.concat(newProducts);
  }
}

export { User, Product };