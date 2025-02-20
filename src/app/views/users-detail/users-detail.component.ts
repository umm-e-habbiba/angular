import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-detail',
  imports: [CommonModule],
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss',
})
export class UsersDetailComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  public userId: string | null = '';

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.userId = id;
    // we will use paramMap Observable instead of snapshot because the snapshot is not updating id,
    //  when we click on button, the value in url is changing but its not changing in view.
    // paramMap Observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
    });
  }
  goPrev() {
    if (this.userId !== null) {
      if (parseInt(this.userId) > 1) {
        let prevID: number | null = parseInt(this.userId) - 1;
        this.router.navigate(['/user', prevID]);
      }
    }
  }
  goNext() {
    if (this.userId !== null) {
      let nextID: number | null = parseInt(this.userId) + 1;
      this.router.navigate(['/user', nextID]);
    }
  }
  goBack() {
    let currentID = this.userId ? this.userId : null;
    this.router.navigate(['/users', { id: currentID }]);
  }
}
