import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Product} from './services/product'
import { User } from './interfaces/User';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NgFor,FormsModule,RouterLink],
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-api');

   userList:User[]=[];
  //userList=signal<User[]>([])
  selectedusr:User |undefined;
  //selectedusr=signal<User |undefined>(undefined);
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
    if(!this.selectedusr){
      this.pService.saveUser(u).subscribe((data:User)=>{
      console.log("saved data",data)
        if(data){
        this.getuser();
        }
      })
    }
    else{
      //console.log("updated user here",u)
      const userdata={...u,id:this.selectedusr.id}
      this.pService.updateUser(userdata).subscribe((data)=>{
        if(data){
        this.getuser();
        }
      })
    }
     
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
  updateUser(id:string){
    this.pService.getSelectedUser(id).subscribe((data:User)=>{
      console.log("updating....")
      this.selectedusr=data;
    })
  }
}
