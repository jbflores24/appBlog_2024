import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { GestionUserComponent } from './pages/users/gestion-user/gestion-user.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { GestionArticuloComponent } from './pages/articulos/gestion-articulo/gestion-articulo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path : 'users',
    component: UsersComponent
  },
  {
    path : 'gestionUser/:id',
    component : GestionUserComponent
  },
  {
    path: 'articulos',
    component : ArticulosComponent
  },
  {
    path: 'gestionArticulo/:id',
    component : GestionArticuloComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
