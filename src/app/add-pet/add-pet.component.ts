import { Component } from '@angular/core';

@Component({
  selector: 'add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  id:number=0;
  name:string="";
  age:number=0;
  breed:string="";
  isadopted:boolean=true;

  details(){
    let pet = {'id':this.id,'name':this.name,'age':this.age,'breed':this.breed,'isadopted':this.isadopted};
    console.log(this.id,this.name,this.age,this.breed,this.isadopted);
  }
  

}
