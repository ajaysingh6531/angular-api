import { HttpClient } from '@angular/common/http';
import { inject,Service} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Service()
export class Product {

   private http = inject(HttpClient);

    getUser():Observable<User[]>{
        const url="http://localhost:3000/users";
        return this.http.get<User[]>(url);
    }
}
