import { Component } from '@angular/core';
import { ValidationService } from '../service/validation.service';
import { ApiResponse } from './ApiResponse.model';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  // signup data
  username: string = "";
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";

  //login data
  loginUsername: string = "";
  loginPassword: string = "";


  loginOpen = false;
  signupOpen = false;
  mainOpen = true;

  user: any = null;


  isLoggedIn = false;

  // SignUpValidation
  signUpValidation() {
    if (ValidationService.isEmpty(this.name) || ValidationService.isEmpty(this.username) || ValidationService.isEmpty(this.email) || ValidationService.isEmpty(this.phone) || ValidationService.isEmpty(this.password)) {
      alert("Fields should not be empty");
      return false;
    }
    if (ValidationService.spaceChecking(this.username)) {
      alert("Invalid Username")
      return false;
    }
    if (ValidationService.numberChecking(this.name) || ValidationService.specialCharacter(this.name)) {
      alert("Invalid Name");
      return false;
    }
    if (this.phone.length != 10) {
      alert("Invalid Contact");
      return false;
    }
    if (this.password.length < 8) {
      alert("Invalid Password");
      return false;
    }
    return true

  }



  clearDetails() {
    this.username = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.password = "";
    this.loginUsername = "";
    this.loginPassword = "";
  }
  openLoginCompo() {
    this.loginOpen = true;
    this.signupOpen = false;
    this.mainOpen = false;
    this.clearDetails();
  }
  openSignupCompo() {
    this.loginOpen = false;
    this.mainOpen = false;
    this.signupOpen = true;
    this.clearDetails();
  }
  openMainCompo() {
    this.mainOpen = true;
    this.signupOpen = false;
    this.loginOpen = false;
    this.clearDetails();
  }

  //Sign Up method
  signUp() {
    if (this.signUpValidation()) {
      let user = { 'username': this.username, 'name': this.name, 'email': this.email, 'contact': this.phone, 'password': this.password };
      console.log(this.username, this.name, this.email, this.phone, this.password);
      fetch("http://localhost:8080/addUser", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((resp: ApiResponse) => {
          console.log((resp));
          if (resp.statusCode != 200) {
            alert(resp.errorMessage);
          } else {
            let r = confirm("You have been signed up successfully! Do you want to log in?");
            if (r) {
              this.openLoginCompo();
            } else {
              this.openMainCompo();
            }
          }
        })
        .catch((err) => console.error(err));
      this.clearDetails();
    }
  }


  login() {
    if (ValidationService.spaceChecking(this.loginUsername) || ValidationService.spaceChecking(this.loginPassword)) {
      alert("Please enter valid username or password");
    }
    else {
      fetch("http://localhost:8080/login", {
        method: "GET",
        headers: {
          'username': this.loginUsername,
          'password': this.loginPassword
        }
      })
        .then((response) => { return response.json() })
        .then((text) => {
          if (text.statusCode != 200) {
            alert(text.errorMessage);
          }
          else {
            alert("Logged in successfully!");
            this.user = text.response;
            this.isLoggedIn = true;
          }
        })
        .catch((err) => console.log(err));
      this.clearDetails();

    }
  }


}
