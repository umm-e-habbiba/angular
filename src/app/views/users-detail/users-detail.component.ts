import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users-detail',
  imports: [],
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss',
})
export class UsersDetailComponent {
  constructor(private route: ActivatedRoute) {}
  public userId: string | null = '';

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userId = id;
  }
}
