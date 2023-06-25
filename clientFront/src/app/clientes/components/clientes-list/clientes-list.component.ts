import { Component, OnInit } from '@angular/core';
import { ClientesRes } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { deleteClient } from 'src/app/store/actions/clients/clients.actions';
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
