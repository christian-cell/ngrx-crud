import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/httpRequests/clientes.service';
import { ClientesRes, ClientsFilters } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { deleteClient, getClientsFiltered } from 'src/app/store/actions/clients/clients.actions';
import { Router } from '@angular/router';
import { addClientsFilters } from 'src/app/store/actions/clients/clientsFilters.actions';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clients :                                    ClientesRes[] = [];
  clientsFilters:                              ClientsFilters = {};

  constructor(
    private router:                            Router,
    private store:                             Store<AppState>
  ) { }

  ngOnInit(): void {
    this.CheckFilters();
    this.GetClients();
    
  }

  CheckFilters():void{
    this.store.select( AppState => AppState.clientesFilters )
    .subscribe(( clientsFilters ) => {
      let myClientsFilters = {...clientsFilters};
      this.clientsFilters = myClientsFilters;
    })
  }

  GetClients():void{
    this.store.select(AppState => AppState.clientes)
    .subscribe(clientes => {
      this.clients = clientes;
    })
  }

  AddFilters( filter:string ):void{
    let myClientsFilters = {...this.clientsFilters} ;
    this.store.dispatch(addClientsFilters({ clientsFilters : myClientsFilters }));
  }

  DeleteClient(clientId:number):void{
    this.store.dispatch(deleteClient({ clientId : clientId }))
  }

  GoToUpdate( clientId: number ):void{
    if(clientId)this.router.navigate(['clientes/clientUpdate' , { clientId : clientId }]);
  }
}
