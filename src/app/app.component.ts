import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((res) => {
      this.isFetching = false;
      this.loadedPosts = res;
    }, err => {
      console.error(err);
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe((res) => {
      this.loadedPosts = [];
    });
  }
}
