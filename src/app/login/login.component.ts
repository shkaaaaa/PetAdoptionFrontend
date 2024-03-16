import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username:string="";
    password:string="";
    login(){
      fetch("http://localhost:8080/login",{
        method:"GET",
        headers:{
          'username':this.username,
          'password':this.password
        }
      })
      .then((response)=>{return response.text()})
      .then((text)=>alert(text))
      .catch((err)=>console.log(err))
    }

}


