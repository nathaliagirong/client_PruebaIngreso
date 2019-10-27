import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './pages/login/login.routing';
import { projectsRoutes } from './pages/projects/projects.routing';
import { tasksRoutes } from './pages/tasks/tasks.routing';
import { usersRoutes } from './pages/users/users.routing';


const routes: Routes = [
  ...loginRoutes,
  ...projectsRoutes,
  ...tasksRoutes,
  ...usersRoutes,
  
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
