import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './services/posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TribeHired Test';
  allPost;

  constructor(
    private postService: PostsService,
    private router: Router ) {}

  ngOnInit() {
    this.postService.getPostAll().subscribe(
      res => {
        console.log(res);
        this.allPost = res;
      }
    );
  }

  postDetails(event) {
    console.log(event);
    // this.router.navigate(['/postDetails-component/' + event.id]);
    this.router.navigate([`postDetails-component/${event.id}`]);
  }
}
