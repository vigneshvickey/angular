import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 test: string = 'just a test';
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  	 console.log(this.auth.test());
  }
  onClickSubmit(user,password){
  	this.auth.UserData(user,password);
  	this.router.navigateByUrl('/app-banner');
  }

}
