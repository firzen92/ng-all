import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    this.http
      .post<{ name: string }>(
        "https://ng-auth-f2c00-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get("https://ng-auth-f2c00-default-rtdb.firebaseio.com/post.json")
      .pipe(
        map((response) => {
          let finalRes = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              finalRes.push({ ...response[key], id: key });
            }
          }
          return finalRes;
        }, catchError(error => {
          error = "erorr there";
          return throwError(error);
        }))
      );
  }

  clearPosts() {
    return this.http
      .delete("https://ng-auth-f2c00-default-rtdb.firebaseio.com/post.json");
  }
}
