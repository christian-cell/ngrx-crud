import { Component, OnInit , OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClientsFilters } from 'src/app/models';
import { AppState } from 'src/app/models/appState/appState';
import { addClientsFilters } from 'src/app/store/actions/clients/clientsFilters.actions';
import { ClientsFiltersToClientesListService } from '../../services';
import { Subscription } from 'rxjs';
import { ComponentToSpinnerComponentService } from 'src/app/shared/services';

@Component({
  selector: 'app-clients-filters',
  templateUrl: './clients-filters.component.html',
  styleUrls: ['./clients-filters.component.scss']
})
export class ClientsFiltersComponent implements OnInit , OnDestroy {

  clientsFilters:                                      ClientsFilters = {};
  doneTypingInterval:                                  number = 0;
  typingTimer;
  inputDisabled:                                       boolean = false;
  enableFiltersSubscription:                           Subscription

  constructor(
    private store:                                     Store<AppState>,
    private clientsFiltersToClientesListService:       ClientsFiltersToClientesListService,
    private componentToSpinnerComponentService:        ComponentToSpinnerComponentService
  ) {
    this.enableFiltersSubscription = this.clientsFiltersToClientesListService
    .onMessage().subscribe(( message:string ) =>{
      if(message){
        if(message === 'enable_filters') this.inputDisabled = false;
      }
    })
  }

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

  StartTyping():void{
    window.clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.AddFilters();
    }, 2000);
  }

  AddFilters( ):void{
    let myClientsFilters = {...this.clientsFilters} ;
    this.inputDisabled = true;
    this.componentToSpinnerComponentService.sendMessage('show');
    this.store.dispatch(addClientsFilters({ clientsFilters : myClientsFilters }));
  }

  ngOnDestroy(): void {
    this.enableFiltersSubscription.unsubscribe();
  }

}
