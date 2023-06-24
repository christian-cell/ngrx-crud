import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClientesRes } from 'src/app/models';
import { AppState } from 'src/app/models/appState/appState';
import { selectClientByAge } from 'src/app/store/selectors/clients/clients.selectors';


@Component({
  selector: 'app-client-by-id',
  templateUrl: './client-by-id.component.html',
  styleUrls: ['./client-by-id.component.scss']
})
export class ClientByIdComponent implements OnInit {

  client :                              ClientesRes = {};

  constructor(
    private store :                     Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  SearchClientByAge():void{
    
    const { client : { age } } = this;

    if(age){
      this.store.select(selectClientByAge(+age))
      .subscribe(client => {
      })
    }
  }

}
