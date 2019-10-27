import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginGuard } from 'src/app/guards/login.guard';

export const loginRoutes: Routes = [
    {
        path: 'login', component: LoginComponent, canActivate: [LoginGuard]
    }
];