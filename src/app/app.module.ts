import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos
import { LoginComponent } from './components/login/login.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { MascotaTarjetaComponent } from './components/mascotas/mascotaTarjeta.component';
import { NavbarComponent } from './components/navba/navbar.component';

//servicios
import { UserService } from './components/services/user.service';
import { PetService } from './components/services/mascota.service';
import { Ayuda } from './components/services/auxiliar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MascotasComponent,
    MascotaTarjetaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    PetService,
    Ayuda
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
