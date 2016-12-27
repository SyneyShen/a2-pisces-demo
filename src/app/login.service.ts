import { Injectable } from '@angular/core';
import { User } from './interface/user.interface';

@Injectable()
export class LoginService {

  constructor() { }

  loginAuth(u: User): boolean {
    if (u.account === 'demo' && u.password === 'demo') {
      console.log('pass auth.');
      return true;
    }else{
      console.log('not passed.', u.account, u.password);
    }

    return false;
  }

}
