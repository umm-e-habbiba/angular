import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../../posts.service';
import { IPost } from '../../../post';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  public postId: string | null = '';
  public errorMsg: string = '';
  public postData: IPost = {
    id: 0,
    title: '',
    body: '',
  };
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.postId = id;
      this.postService.getPostById(id).subscribe(
        (data) => (this.postData = data),
        (error) => (this.errorMsg = error)
      );
    });
  }
  onSelectPost(id: string | null) {
    this.postService.selectPost(id);
  }
}
