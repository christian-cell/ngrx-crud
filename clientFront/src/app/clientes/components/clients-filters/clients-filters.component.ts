import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClientsFilters } from 'src/app/models';
import { AppState } from 'src/app/models/appState/appState';
import { addClientsFilters } from 'src/app/store/actions/clients/clientsFilters.actions';

@Component({
  selector: 'app-clients-filters',
  templateUrl: './clients-filters.component.html',
  styleUrls: ['./clients-filters.component.scss']
})
export class ClientsFiltersComponent implements OnInit {

  clientsFilters:                              ClientsFilters = {};

  constructor(
    private store:                             Store<AppState>
  ) { }

  ngOnInit(): void {
    this.CheckFilters();
  }

  CheckFilters():void{
    this.store.select( AppState => AppState.clientesFilters )
    .subscribe(( clientsFilters ) => {
      let myClientsFilters = {...clientsFilters};
      this.clientsFilters = myClientsFilters;
    })
  }

  AddFilters( filter:string ):void{
    let myClientsFilters = {...this.clientsFilters} ;
    this.store.dispatch(addClientsFilters({ clientsFilters : myClientsFilters }));
  }

}
