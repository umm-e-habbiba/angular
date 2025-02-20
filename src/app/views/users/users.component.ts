import { Component } from '@angular/core';
import { IEmployee } from '../../../employee';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public users: IEmployee[] = [];
  public errorMsg: string = '';
  public currentId: string | null = '';
  // constructor(private _userService = UsersService) {}

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => (this.errorMsg = error)
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.currentId = id;
    });
  }
  onSelect(user: IEmployee) {
    this.router.navigate(['/user', user.id]);
  }
  isSelected(Id: string) {
    return Id === this.currentId;
  }
}
