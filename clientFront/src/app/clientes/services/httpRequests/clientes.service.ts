import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesRes } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  LoadClients( parameters ? : any ):Observable<ClientesRes>{
    return this.http.get<ClientesRes>(`${environment.url}GetClients`);
  }

  AddNewClient( body: ClientesRes ){
    return this.http.post(`${environment.url}AddClient` , body);
  }

  DeleteClient( clientId: number ){
    return this.http.delete(`${environment.url}DeleteClient?clientId=${clientId}` , {responseType:'text'});
  }

  UpdateClient( body: ClientesRes ){
    return this.http.put(`${environment.url}EditClient` , body);
  }
}
