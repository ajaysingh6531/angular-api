import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './services/product'
import { User } from './interfaces/User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-api');

  productList:User[]=[];
  constructor(private pService: Product){

  }
  ngOnInit(){
    this.pService.getUser().subscribe((data:User[])=>{
      console.log('Received', data.length);
      console.log(data);
      this.productList=data;
    })
  }
}
