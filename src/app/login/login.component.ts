import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interface/user.interface';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private _loginService: LoginService) {}

  login(l: NgForm) {
    //console.log(l.value.username, l.value.password);
    let u: User = {
      account: l.value.username,
      password: l.value.password,
    };

    console.log(this._loginService.loginAuth(u));
    //console.log(u.account, u.password);
  }
}
