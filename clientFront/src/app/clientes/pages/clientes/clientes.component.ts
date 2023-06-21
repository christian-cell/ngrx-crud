import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { getClientsFiltered } from 'src/app/store/actions/clients/clients.actions';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
  constructor(
    private store:                                      Store<AppState>
  ) { }

  ngOnInit(): void {
    this.StoreClients();
  }


  StoreClients():void{
    let parameters = { parameters : {} };
    this.store.dispatch(getClientsFiltered(parameters));
  }

}
