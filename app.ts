import { ProductService } from "./ProductService";
import { Product } from './Product';

let _productService = new ProductService();

let results = _productService.getProducts();

let p = new Product();

p.id = 3;
p.name = "İphone 6";
p.category = "Telefon";
p.fiyat = 5000;

// _productService.saveProduct(p);
_productService.saveProduct(p);
_productService.deleteProduct(p);

console.log(results);