import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email : string = '';
  password : string = '';




  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  
  }

  login(){

    if(this.email == ''){
      alert('Please enter correct credentials');
      return;
    }

    if(this.password == ''){
      alert('Please enter correct credentials');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email ='';
    this.password = '';



  }

  signInWithGoogle(){
    this.auth.googleSignIn();

  }




}
