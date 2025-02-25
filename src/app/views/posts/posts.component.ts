import { Component } from '@angular/core';
import { IPost } from '../../../post';
import { PostsService } from '../../posts.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  public posts: IPost[] = [];
  public errorMsg: string = '';
  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => (this.posts = data),
      (error) => (this.errorMsg = error)
    );
  }
  // onSelectPost(post: IPost) {
  //   this.router.navigate(['/post', post.id]);
  // }
  onSelectPost(id: string | null) {
    this.postService.selectPost(id);
  }
}
