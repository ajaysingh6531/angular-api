import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './services/product'
import { User } from './interfaces/User';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NgFor,FormsModule],
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-api');

  userList:User[]=[];
  constructor(private pService: Product){

  }
  ngOnInit(){
    this.getuser();
  }
  getuser(){
     this.pService.getUser().subscribe((data:User[])=>{
      console.log('Received', data.length);
      console.log(data);
      this.userList=data;
    })
  }
  addUser(u:User){
    this.pService.saveUser(u).subscribe((data:User)=>{
      console.log("saved data",data)
      if(data){
        this.getuser();
      }
    })
    
  }
  deleteUser(id:string){
    //console.log(id);
    this.pService.delete(id).subscribe((data:User)=>{
      //console.log(data)
      if(data){
        this.getuser();
      }
    })
    

  }
}
