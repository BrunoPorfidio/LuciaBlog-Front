import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboracionesComponent } from './components/colaboraciones/colaboraciones.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { LuciblogComponent } from './components/luciblog/luciblog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';
import { ModalEditarPublicacionComponent } from './modals/modal-editar-publicacion/modal-editar-publicacion.component';
import { ModalNuevoPublicacionComponent } from './modals/modal-nuevo-publicacion/modal-nuevo-publicacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/luciBlog', pathMatch: 'full' },
  { path: 'luciBlog', component: LuciblogComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'destacados', component: DestacadosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'publicacion', component: PublicacionComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: 'nuevo-publicacion', component: ModalNuevoPublicacionComponent },
  { path: 'editar-publicacion/:idPublicacion', component: ModalEditarPublicacionComponent },
  { path: 'reflexiones', component: ReflexionesComponent },
  { path: 'colaboraciones', component: ColaboracionesComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
