import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TribeHired Test';

  allPost;
  // tslint:disable-next-line: no-inferrable-types
  page: number = 1;


  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getPostAll().subscribe(
      res => {
        console.log(res);
        this.allPost = res;
        console.log(this.allPost);
      }
    );
  }
}
