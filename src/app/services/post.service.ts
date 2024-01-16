import { Injectable } from '@angular/core';
import { Posts } from '../Interface/Posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  private posts: Posts[] = [
    {
      id: 1,
      name: 'Saleha Tehreem',
      designation: 'Statistician',
      image:
        'https://media.licdn.com/dms/image/D4D03AQFZRXfRlCkSUg/profile-displayphoto-shrink_100_100/0/1690138390266?e=1710374400&v=beta&t=eg1_gIuxYo7gXKhbJnNURC_lJsgwfwz2FMwfOpTmv9Y',
      time: 8,
      description:
        'Time for you to take a short break- here is a joke for all those learning statistics, hoping it to bring some laughs for you all! ',
      postImage:
        'https://media.licdn.com/dms/image/D4D22AQGlAXHj8bFxJw/feedshare-shrink_800/0/1688975115405?e=1707350400&v=beta&t=6l62qu2so3bk0HW4ckduLa_a3YRzR1zofCB9xNepWog',
      liked: 25,
      comments: 10,
      shares: 40,
    },
    {
      id: 2,
      name: 'Rabia Waqar',
      designation: 'ML Engineer',
      image:
        'assets/rabia.jpg',
      time: 2,
      description:
        'Thrilled to share this small achievement we have made as a group. Alhumdulilah.Done with final phase of our FYP with AI and Machine Learning.',
      postImage:
        'https://media.licdn.com/dms/image/D4D22AQEjJi4QlUj6eA/feedshare-shrink_800/0/1690136376920?e=1707350400&v=beta&t=edKMfnPw5k9DNA00nxSbX6W_Y6xQms2j8KRxjkhUYYQ',
      liked: 25,
      comments: 10,
      shares: 40,
    },
    {
      id: 3,
      name: 'Harris Siddiqui',
      designation: 'Associate Software Enigeer at Mind Maze Pvt Ltd.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTc8LtpJ7mlou0X_CRTxkOw1ZyJIxkiiyKtw&usqp=CAU',
      time: 6,
      description:
        'I am happy to share that I am starting a new position as Associate Software Engineer at Mind Maze (Pvt.) Limited!',

      postImage:
        'https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAACLpMhX316YdSYufJSyHsL132Q.jpg',
      liked: 10,
      comments: 22,
      shares: 16,
    },
  ];

  public getPosts(): Posts[] {
    return this.posts;
  }

  public likePost(postId: number): void {
    const postIndex = this.posts.findIndex((post) => post.id === postId);

    if (postIndex !== -1) {
      this.posts[postIndex].liked++;
    }
  }
}
