import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  email : string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword(){

    if(this.email == ''){
      alert('Please enter correct credentials')
      return;
    }


    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
