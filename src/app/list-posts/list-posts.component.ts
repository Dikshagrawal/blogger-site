import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts = [];
  userId;

  constructor(
    private _apiService: ApiService,
    public activatedRoute: ActivatedRoute
    ) { 
    this.userId = this.activatedRoute.snapshot.params.userId;
  }


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this._apiService.getPosts(this.userId).subscribe(
      posts => {
        this.posts = posts;
      }, (err: any) => {
        console.log(err);
      });
  }

}
