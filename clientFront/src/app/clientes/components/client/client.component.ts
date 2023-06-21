import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesRes } from 'src/app/models';
import { ClientesService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { addClient } from 'src/app/store/actions/clients/clients.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client :              ClientesRes = {};

  ClientForm =           new FormGroup({
    name :               new FormControl('' , [Validators.required]),
    lastName :           new FormControl('' , [Validators.required]),
    dni :                new FormControl('' , [Validators.required]),
    age :                new FormControl('' , [Validators.required])
  })

  constructor(
    private store:       Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  SaveNewClient():void{
    const { ClientForm : { status , value } } = this;

    if( status === 'VALID' ){
      console.log(this.client);
      if(value.age){
        let newClient : ClientesRes = {...value , age : +value.age};
        this.store.dispatch(addClient({ client : newClient }));
      }
    }
  }

  CheckInputValue(e:any){
    // console.log(e);
  }

}
