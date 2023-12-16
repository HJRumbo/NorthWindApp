import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { RegistrarFacturaComponent } from './pages/registrar-factura/registrar-factura.component';

const routes: Routes = [
  { path: 'Facturas', component: FacturasComponent },
  { path: 'Detalles', component: DetallesComponent },
  { path: 'RegistrarFactura', component: RegistrarFacturaComponent },
  { path: '',   redirectTo: 'Facturas', pathMatch: 'full' },
  { path: '**',   redirectTo: 'Facturas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
