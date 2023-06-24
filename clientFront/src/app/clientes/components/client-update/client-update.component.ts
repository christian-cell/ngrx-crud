import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ClientesRes } from 'src/app/models';
import { AppState } from 'src/app/models/appState/appState';
import { selectClientById } from 'src/app/store/selectors/clients/clients.selectors';
import { ClientesService } from '../../services';
import { updateClient } from 'src/app/store/actions/clients/clients.actions';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  client :              ClientesRes = {};

  ClientForm =           new FormGroup({
    name :               new FormControl('' , [Validators.required]),
    lastName :           new FormControl('' , [Validators.required]),
    dni :                new FormControl('' , [Validators.required]),
    age :                new FormControl('' , [Validators.required])
  })

  constructor(
    private store:            Store<AppState>,
    private route:            ActivatedRoute,
    private clientesService : ClientesService
  ) { }

  ngOnInit(): void {
    this.CheckParams();
  }

  CheckParams():void{

    this.route.paramMap.subscribe( params => {

      if(params.get('clientId')){

        this.client.clientId = ( params as any ).get('clientId');
        const { client : { clientId } } = this;

        if(clientId){
          this.store.select(selectClientById(clientId))
          .subscribe(client => {
            if(client)this.BuildForm(client);
          
          });
        }
      }
    })
  }

  BuildForm(client:ClientesRes):void{
    this.client = client;
  }

  UpdateClient():void{
    const { ClientForm : { status , value } } = this;

    if( status === 'VALID' ){
      if(value.age){

        const { clientId } = this.client;
        let newClient : ClientesRes = {...value , age : +value.age , clientId : clientId};
        this.store.dispatch(updateClient({ client : newClient }))
      
      }
    }
  }

  CheckInputValue(e:any){
  }

}
