import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path:"",
     component: AppLayoutComponent,
    // canActivate:[AuthGuard],
    children:[
      {path:"",component: HomeComponent},
      {path:"category",component: CategoryComponent}
    ]
  },
{
  path:"login",
  component: AuthLayoutComponent,
  children:[
    {path:"",component: LoginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
