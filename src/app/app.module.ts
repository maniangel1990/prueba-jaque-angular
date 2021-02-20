import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { UsuarioServiceService } from './services/usuario-service.service';
import { RegistroComponent } from './pages/registro/registro.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

//angular material
import { MaterialModule } from './material.module';

//modulo paginacion
import {NgxPaginationModule} from 'ngx-pagination';
import { environment } from '../environments/environment';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

//graficas
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    GraficasComponent,
    RegistroComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [
    UsuarioServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
