import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/httpRequests/clientes.service';
import { ClientesRes } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { deleteClient, getClientsFiltered } from 'src/app/store/actions/clients/clients.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clients :                                    ClientesRes[] = [];

  constructor(
    private router:                            Router,
    private store:                             Store<AppState>
  ) { }

  ngOnInit(): void {
    
    this.GetClients();
  }

  GetClients():void{
    this.store.select(AppState => AppState.clientes)
    .subscribe(clientes => {
      console.log(clientes);
      this.clients = clientes;
    })
  }

  DeleteClient(clientId:number):void{
    console.log(clientId);
    this.store.dispatch(deleteClient({ clientId : clientId }))
  }

  GoToUpdate( clientId: number ):void{
    console.log(clientId); /* <----- TODO when client is comming from state without refresh clientId is undefined */
    if(clientId)this.router.navigate(['clientes/clientUpdate' , { clientId : clientId }]);
  }
}
