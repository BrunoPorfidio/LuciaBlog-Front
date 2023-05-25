import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboracionComponent } from './components/colaboracion/colaboracion.component';
import { ColaboracionesComponent } from './components/colaboraciones/colaboraciones.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { LoginComponent } from './components/login/login.component';
import { LuciblogComponent } from './components/luciblog/luciblog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ReflexionComponent } from './components/reflexion/reflexion.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';
import { ModalEditarColaboracionComponent } from './modals/modal-editar-colaboracion/modal-editar-colaboracion.component';
import { ModalEditarNovedadComponent } from './modals/modal-editar-novedad/modal-editar-novedad.component';
import { ModalEditarPublicacionComponent } from './modals/modal-editar-publicacion/modal-editar-publicacion.component';
import { ModalEditarReflexionComponent } from './modals/modal-editar-reflexion/modal-editar-reflexion.component';
import { ModalNuevoColaboracionComponent } from './modals/modal-nuevo-colaboracion/modal-nuevo-colaboracion.component';
import { ModalNuevoNovedadComponent } from './modals/modal-nuevo-novedad/modal-nuevo-novedad.component';
import { ModalNuevoPublicacionComponent } from './modals/modal-nuevo-publicacion/modal-nuevo-publicacion.component';
import { ModalNuevoReflexionComponent } from './modals/modal-nuevo-reflexion/modal-nuevo-reflexion.component';
import { GuardGuard } from './Services/guard.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'luciBlog', 
    pathMatch: 'full' 
  },
  { 
    path: 'luciBlog', 
    component: LuciblogComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent
   },
  { 
    path: 'navbar', 
    component: NavbarComponent
   },
  {
     path: 'destacados', 
     component: DestacadosComponent 
    },

// ------------------------------------------------------------------------------
// -------------------------------- NOVEDADES --------------------------------
// ------------------------------------------------------------------------------
  { 
    path: 'novedades', 
    component: NovedadesComponent 
  },
  {
    path: 'novedad/:idNovedad',
    component: NovedadComponent
  },
  {
    path: 'nueva-novedad',
    component: ModalNuevoNovedadComponent
  },
  {
    path: 'editar-novedad/:idNovedad',
    component: ModalEditarNovedadComponent
  },

// ------------------------------------------------------------------------------
// -------------------------------- PUBLICACIONES --------------------------------
// ------------------------------------------------------------------------------

  { 
   path: 'publicaciones', 
   component: PublicacionesComponent 
  },
  { 
    path: 'publicacion/:idPublicacion', 
    component: PublicacionComponent 
  },
  {
    path: 'nueva-publicacion',
    component: ModalNuevoPublicacionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  },
  {
    path: 'editar-publicacion/:idPublicacion',
    component: ModalEditarPublicacionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  },

// ------------------------------------------------------------------------------
// -------------------------------- REFLEXIONES --------------------------------
// ------------------------------------------------------------------------------

  { 
    path: 'reflexiones', 
    component: ReflexionesComponent 
  },
  {
    path: 'reflexion/:idReflexion',
    component: ReflexionComponent
  },
  { path: 'nueva-reflexion',
    component: ModalNuevoReflexionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  },
  {
    path: 'editar-reflexion/:idReflexion',
    component: ModalEditarReflexionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  },

// ------------------------------------------------------------------------------
// -------------------------------- COLABORACIONES --------------------------------
// ------------------------------------------------------------------------------

  { 
    path: 'colaboraciones', 
    component: ColaboracionesComponent 
  },
  {
    path: 'colaboracion/:idColaboraciones',
    component: ColaboracionComponent
  },
  {
    path: 'nueva-colaboracion', 
    component: ModalNuevoColaboracionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  },
  {
    path: 'editar-colaboracion/:idColaboraciones',
    component: ModalEditarColaboracionComponent,
    canActivate: [GuardGuard],
    data: { expectedRol: ['admin'] 
  },
  }

// ------------------------------------------------------------------------------

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
