import { Component } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    username:string="";
    name:string="";
    email:string="";
    phone:string="";
    password:string="";

    details(){
      let user = {'username':this.username,'name':this.name,'email':this.email,'contact':this.phone,'password':this.password};
      console.log(this.username,this.name,this.email,this.phone,this.password);
      fetch("http://localhost:8080/addUser",{
        method:"POST",
        body:JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {return response.json()})
      .then((text)=> alert(text.name)) 
      .catch((err) => console.error(err));
    }

}
