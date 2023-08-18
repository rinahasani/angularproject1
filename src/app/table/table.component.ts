import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';
UserService


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
 })
// export class TableComponent {
//   users: User[] = []; 

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.userService.getUsers().subscribe((users) => {
//       this.users = users; 
//     });
//   }

//   deleteUser(index: number) {
//     this.userService.deleteUser(index);
//   }
// }

export class TableComponent {
  frontendUsers: User[] = [];
  backendUsers: User[] = [];
  fullstackUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getFrontendUsers().subscribe((users) => {
      this.frontendUsers = users;
    });

    this.userService.getBackendUsers().subscribe((users) => {
      this.backendUsers = users;
    });

    this.userService.getFullstackUsers().subscribe((users) => {
      this.fullstackUsers = users;
    });
  }

  deleteFrontendUser(index: number) {
    this.userService.deleteUser(index, 'FrontEnd');
  }

  deleteBackendUser(index: number) {
    this.userService.deleteUser(index, 'BackEnd');
  }

  deleteFullstackUser(index: number) {
    this.userService.deleteUser(index, 'FullStack');
  }
}
