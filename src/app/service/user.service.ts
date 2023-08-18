import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private frontendUsers: User[] = [];
  private backendUsers: User[] = [];
  private fullstackUsers: User[] = [];

  private frontendUsersSubject = new BehaviorSubject<User[]>(this.frontendUsers);
  private backendUsersSubject = new BehaviorSubject<User[]>(this.backendUsers);
  private fullstackUsersSubject = new BehaviorSubject<User[]>(this.fullstackUsers);

  constructor() {}

  getFrontendUsers(): Observable<User[]> {
    return this.frontendUsersSubject.asObservable();
  }

  getBackendUsers(): Observable<User[]> {
    return this.backendUsersSubject.asObservable();
  }

  getFullstackUsers(): Observable<User[]> {
    return this.fullstackUsersSubject.asObservable();
  }

  addUser(user: User) {
    if (user.jobPosition === 'FrontEnd') {
      this.frontendUsers.push(user);
      this.frontendUsersSubject.next([...this.frontendUsers]);
    } else if (user.jobPosition === 'BackEnd') {
      this.backendUsers.push(user);
      this.backendUsersSubject.next([...this.backendUsers]);
    } else if (user.jobPosition === 'FullStack') {
      this.fullstackUsers.push(user);
      this.fullstackUsersSubject.next([...this.fullstackUsers]);
    }
  }

  deleteUser(index: number, jobPosition: string) {
    if (jobPosition === 'FrontEnd') {
      this.frontendUsers.splice(index, 1);
      this.frontendUsersSubject.next([...this.frontendUsers]);
    } else if (jobPosition === 'BackEnd') {
      this.backendUsers.splice(index, 1);
      this.backendUsersSubject.next([...this.backendUsers]);
    } else if (jobPosition === 'FullStack') {
      this.fullstackUsers.splice(index, 1);
      this.fullstackUsersSubject.next([...this.fullstackUsers]);
    }
  }
}

