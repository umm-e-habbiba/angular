import { Routes } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';
import { MainComponent } from './views/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { UsersDetailComponent } from './views/users-detail/users-detail.component';

export const routes: Routes = [
  // {path: '', redirectTo:'/users',pathMatch:'full'}, //if we want /users as our default route
  { path: '', component: MainComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UsersDetailComponent },
  // at the end add route for 404 (wild card should be the last route)
  { path: '**', component: PageNotFoundComponent },
];
export const allRoutes = [PostsComponent, UsersComponent];
