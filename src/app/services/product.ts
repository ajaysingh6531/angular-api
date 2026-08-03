import { HttpClient } from '@angular/common/http';
import { Service ,inject} from '@angular/core';

@Service()
export class Product {

   private http = inject(HttpClient);

    getProductList(){
        const url="https://dummyjson.com/products";
        return this.http.get(url);
    }
}
