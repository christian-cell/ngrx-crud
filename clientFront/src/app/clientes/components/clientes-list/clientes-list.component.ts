import { Component, OnInit } from '@angular/core';
import { ClientesRes } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { deleteClient } from 'src/app/store/actions/clients/clients.actions';
import { Router } from '@angular/router';
import { ClientsFiltersToClientesListService } from '../../services';
import { ComponentToSpinnerComponentService } from 'src/app/shared/services';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clients :                                            ClientesRes[] = [];

  constructor(
    private router:                                    Router,
    private store:                                     Store<AppState>,
    private clientsFiltersToClientesListService:       ClientsFiltersToClientesListService,
    private componentToSpinnerComponentService:        ComponentToSpinnerComponentService
  ) { }

  ngOnInit(): void {
    this.GetClients();
  }

  GetClients():void{
    this.store.select(AppState => AppState.clientes)
    .subscribe(clientes => {
      console.log(clientes);
      this.componentToSpinnerComponentService.sendMessage('hide');
      this.clientsFiltersToClientesListService.sendMessage('enable_filters')
      this.clients = clientes;
    })
  }

  DeleteClient(clientId:number):void{
    this.store.dispatch(deleteClient({ clientId : clientId }))
  }

  GoToUpdate( clientId: number ):void{
    if(clientId)this.router.navigate(['clientes/clientUpdate' , { clientId : clientId }]);
  }
}
