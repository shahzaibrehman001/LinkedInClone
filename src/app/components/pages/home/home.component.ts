import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../Interface/Users';
import { PostService } from '../../../services/post.service';
import { Posts } from '../../../Interface/Posts';
import { FormsModule } from '@angular/forms';
import { CreatePostService } from '../../../services/create-post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isFollowing: boolean = false;
  public users: Users[] = [];
  public posts: Posts[] = [];
  showLikeAlert: boolean = false;
  newPost: Posts = {
    id: 0,
    name: '',
    designation: '',
    image: '',
    time: 0,
    description: '',
    postImage: '',
    liked: 0,
    comments: 0,
    shares: 0,
  };
  created_posts: Posts[] | undefined;

  constructor(
    public userService: UsersService,
    public postService: PostService,
    public createPostService:CreatePostService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.posts = this.postService.getPosts();

    // Subscribing new posts from the CreatePostService
    this.createPostService.getNewPosts().subscribe((newPosts) => {
      this.created_posts = newPosts;
    });
  }

  toggleFollow(user: any): void {
    user.isFollowing = !user.isFollowing;
  }

  likePost(post: Posts): void {
    this.postService.likePost(post.id);
    this.showLikeAlert = true;

    setTimeout(() => {
      this.showLikeAlert = false;
    }, 3000);
  }

  createNewPost(): void {
    this.newPost.id = this.posts.length + 1; // Assign a unique ID
    this.newPost.name = 'Shahzaib Rehman'; 
    this.newPost.designation = 'Angular Developer';
    this.newPost.image = 'assets/myPic.png'; 
    this.newPost.time = new Date().getHours(); // Set current time
    this.newPost.description = this.newPost.description; 
    this.newPost.postImage = 'url-to-your-post-image'; 
    this.newPost.liked = 0;
    this.newPost.comments = 0;
    this.newPost.shares = 0;

    // Calling the createPost method from CreatePostService
    this.createPostService.createPost(this.newPost);

    // Reset the newPost object for future posts
    this.newPost = {
      id: 0,
      name: '',
      designation: '',
      image: '',
      time: 0,
      description: '',
      postImage: '',
      liked: 0,
      comments: 0,
      shares: 0,
    };
  }
}
