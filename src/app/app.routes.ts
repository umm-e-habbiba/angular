import { Routes } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';
import { MainComponent } from './views/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
];
export const allRoutes = [PostsComponent, UsersComponent];
