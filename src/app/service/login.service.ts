import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user.interface';

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }

  loginAuth(u: User): boolean {
    if (u.account === 'demo' && u.password === 'demo') {
      console.log('pass auth.');
      localStorage.setItem("currentUser", JSON.stringify(u));
      this._router.navigate(['/system']);
      return true;
    }else{
      console.log('not passed.', u.account, u.password);
    }

    return false;
  }

}
