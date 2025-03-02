import { Routes } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';
import { MainComponent } from './views/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { UsersDetailComponent } from './views/users-detail/users-detail.component';
import { PostDetailComponent } from './views/post-detail/post-detail.component';
import { CommentsComponent } from './views/comments/comments.component';
import { TdfComponent } from './views/forms/tdf/tdf.component';

export const routes: Routes = [
  // {path: '', redirectTo:'/users',pathMatch:'full'}, //if we want /users as our default route
  { path: '', component: MainComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UsersDetailComponent },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    children: [{ path: 'comments', component: CommentsComponent }],
  },
  { path: 'tdf', component: TdfComponent },
  // at the end add route for 404 (wild card should be the last route)
  { path: '**', component: PageNotFoundComponent },
];
export const allRoutes = [PostsComponent, UsersComponent];
