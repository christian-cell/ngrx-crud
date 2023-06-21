import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClientByIdComponent } from './components/client-by-id/client-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './components/client/client.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';



@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListComponent,
    ClientByIdComponent,
    ClientComponent,
    ClientUpdateComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
