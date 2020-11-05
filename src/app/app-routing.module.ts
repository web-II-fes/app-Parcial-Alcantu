import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { MostrarComponent } from './mostrar/mostrar.component';


const routes: Routes = [
  { path: 'crearPedido', component: CrearComponent },
  { path: 'crearPedido/:id', component: CrearComponent },
  { path: 'mostrarPedidos', component: MostrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
