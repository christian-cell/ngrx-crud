import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ClientsFiltersToClientesListService {

  private subject=                      new Subject<any>();

  sendMessage( message: string ):void{
    this.subject.next(message)
  }

  clearMessage():void{
    this.subject.next(null);
  }

  onMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
