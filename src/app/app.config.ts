import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EmployeeService } from './employee.service';
import { provideHttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { PostsService } from './posts.service';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    EmployeeService,
    UsersService,
    PostsService,
    provideHttpClient(),
  ],
};
