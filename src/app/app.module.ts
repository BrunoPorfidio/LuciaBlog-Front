import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ModalEditarPublicacionComponent } from './modals/modal-editar-publicacion/modal-editar-publicacion.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './components/login/login.component';
import { interceptorPorvider } from './Services/interceptor.service';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ModalNuevoNovedadComponent } from './modals/modal-nuevo-novedad/modal-nuevo-novedad.component';
import { ModalEditarNovedadComponent } from './modals/modal-editar-novedad/modal-editar-novedad.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { ModalNuevoColaboracionComponent } from './modals/modal-nuevo-colaboracion/modal-nuevo-colaboracion.component';
import { ModalEditarColaboracionComponent } from './modals/modal-editar-colaboracion/modal-editar-colaboracion.component';
import { ColaboracionComponent } from './components/colaboracion/colaboracion.component';
import { ReflexionComponent } from './components/reflexion/reflexion.component';
import { ModalNuevoReflexionComponent } from './modals/modal-nuevo-reflexion/modal-nuevo-reflexion.component';
import { ModalEditarReflexionComponent } from './modals/modal-editar-reflexion/modal-editar-reflexion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ModalEditarSobreMiComponent } from './modals/modal-editar-sobre-mi/modal-editar-sobre-mi.component';
import {NgxImageCompressService} from 'ngx-image-compress';


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
    LoginComponent,
    OrderByPipe,
    ModalNuevoNovedadComponent,
    ModalEditarNovedadComponent,
    NovedadComponent,
    ModalNuevoColaboracionComponent,
    ModalEditarColaboracionComponent,
    ColaboracionComponent,
    ReflexionComponent,
    ModalNuevoReflexionComponent,
    ModalEditarReflexionComponent,
    BusquedaComponent,
    ModalEditarSobreMiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [
    interceptorPorvider,
    NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
