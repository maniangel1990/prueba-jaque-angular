import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Guard1Guard } from './services/guards/guard1.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { 
    path: 'usuarios', 
    component: UsuariosComponent,
    canActivate: [Guard1Guard]
  },
  { 
    path: 'graficas', 
    component: GraficasComponent,
    canActivate: [Guard1Guard] 
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
