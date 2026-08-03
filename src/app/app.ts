import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './services/product'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-api');

  productList:any
  constructor(private pService: Product){

  }
  ngOnInit(){
    this.pService.getProductList().subscribe((data:any)=>{
      //console.log(data);
      this.productList=data.products;
    })
  }
}
