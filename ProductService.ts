import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";
import { IProductService } from "./IProductService";

export class ProductService implements IProductService{
    private products: Product[];
    private dataSource: SimpleDataSource;
    constructor(){
        this.dataSource = new SimpleDataSource();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }
    
    getById(id: number): Product {
        return this.products.filter(p => p.id == id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null){
            product.id = this.generateId();
        }else{
            
        }
    }
    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }

    private generateId(){
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    } 

}