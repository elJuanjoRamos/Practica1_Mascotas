import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';


const routes: Routes = [
  { path: 'login/:id', component: LoginComponent },
  { path: 'dashboard/user/:id', component: MascotasComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login/access'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
