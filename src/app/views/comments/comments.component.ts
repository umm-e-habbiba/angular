import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { IComment } from '../../../post';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-comments',
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  public comments: IComment[] = [];
  public postId: string | null = '';
  public errorMsg: string = '';
  constructor(
    private route: ActivatedRoute | null,
    private router: Router,
    private postService: PostsService
  ) {}
  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = params.get('id');
    //   console.log('post id in comments component is', params.get('id'));
    // });
    this.route?.parent?.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.postId = params.get('id');
        this.postService.getCommentsByPostId(this.postId).subscribe(
          (data) => (this.comments = data),
          (error) => (this.errorMsg = error)
        );
      }
    });
  }
}
