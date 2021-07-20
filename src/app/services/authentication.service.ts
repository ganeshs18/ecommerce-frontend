import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiService) { }
  private currentUser: BehaviorSubject<User>;
  public currentUserSubject: Observable<User>;

  get CurrentUserValue(): User {
    return this.currentUser.value
  }

  async login(cred: any): Promise<any> {
    const res = await this.api.get('/users/1', cred).toPromise();
    return res;
  }
}
