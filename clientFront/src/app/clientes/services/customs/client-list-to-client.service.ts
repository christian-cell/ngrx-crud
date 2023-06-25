import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientListToClientService {

  private subject=                      new Subject<any>();

  sendMessage( clientId: number ):void{
    this.subject.next(clientId)
  }

  
}
