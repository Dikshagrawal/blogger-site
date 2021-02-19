import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users = [];

  constructor(
    private _apiService : ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._apiService.getUsers().subscribe(
      users => {
        this.users = users;
      }, (err: any) => {
        console.log(err);
      });
  }

  viewPosts(user: any) {
    this.router.navigate([`/user/${user.id}/post-lists`]);
  }
}
