import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { LuciblogComponent } from './components/luciblog/luciblog.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ColaboracionesComponent } from './components/colaboraciones/colaboraciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ModalNuevoPublicacionComponent } from './modals/modal-nuevo-publicacion/modal-nuevo-publicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditarPublicacionComponent } from './modals/modal-editar-publicacion/modal-editar-publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicacionComponent,
    NovedadesComponent,
    LuciblogComponent,
    DestacadosComponent,
    FooterComponent,
    ReflexionesComponent,
    SobreMiComponent,
    ColaboracionesComponent,
    FilterPipe,
    PublicacionesComponent,
    ModalNuevoPublicacionComponent,
    ModalEditarPublicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
