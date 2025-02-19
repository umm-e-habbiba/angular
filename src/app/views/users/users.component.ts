import { Component } from '@angular/core';
import { IEmployee } from '../../../employee';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public users: IEmployee[] = [];
  public errorMsg: string = '';
  // constructor(private _userService = UsersService) {}

  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => (this.errorMsg = error)
    );
  }
  onSelect(user: IEmployee) {
    this.router.navigate(['/user', user.id]);
  }
}
