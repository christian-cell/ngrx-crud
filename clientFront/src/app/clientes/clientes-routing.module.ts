import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';

const routes : Routes = [
  {
    path:'',
    children: [
      {
        path: 'list' , component : ClientesComponent
      },
      {
        path: 'clientUpdate' , component : ClientUpdateComponent
      },
      {
        path: '**' , redirectTo:'list' , pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientesRoutingModule { }
