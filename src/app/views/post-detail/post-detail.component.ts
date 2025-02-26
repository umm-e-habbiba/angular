import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { IPost } from '../../../post';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  public postId: string | null = '';
  public errorMsg: string = '';
  public isComments: boolean = false;
  public postData: IPost = {
    id: 0,
    title: '',
    body: '',
  };
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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
    const currentUrl = this.location.path();
    const urlContainsComments = currentUrl.includes('comments');
    if (urlContainsComments) {
      console.log('comments are showing');
      this.isComments = true;
    } else {
      console.log('comments arenot showing');
      this.isComments = false;
    }
  }
  onSelectPost(id: string | null) {
    this.postService.selectPost(id);
  }
  showComments() {
    this.isComments = true;
    this.router.navigate(['comments'], { relativeTo: this.route });
  }
  hideComments() {
    this.isComments = false;
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}
