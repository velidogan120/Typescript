import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";
import { IProductService } from "./IProductService";

export class ProductService implements IProductService{
    private products: Product[];
    private dataSource: SimpleDataSource;
    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }
    
    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null){
            product.id = this.generateId();
            this.products.push(product);
        }else{
            let index;
            for(let i in this.products){
                if(this.products[i].id === product.id){
                    index = i;
                }
            }
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let deleteId = this.products.indexOf(product);
        if(deleteId > 0){
            this.products.splice(deleteId,1);
        }
    }

    private generateId(){
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    } 

}