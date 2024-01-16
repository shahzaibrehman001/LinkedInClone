// create-post.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posts } from '../Interface/Posts';

@Injectable({
  providedIn: 'root',
})
export class CreatePostService {
  private posts: Posts[] = [];
  private postsSubject: BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>(this.posts);

  createPost(post: Posts): void {
    this.posts.push(post);
    this.postsSubject.next([...this.posts]);
  }

  getNewPosts(): Observable<Posts[]> {
    return this.postsSubject.asObservable();
  }
}
