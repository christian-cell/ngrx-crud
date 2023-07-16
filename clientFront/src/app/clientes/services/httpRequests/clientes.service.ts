import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesRes, ClientsFilters } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  LoadClients( parameters ? : ClientsFilters ):Observable<ClientesRes>{
    
    const url = `${environment.url}GetClients`;
    let builtUrl = this.BuildUrl( url , parameters ); 
    
    return this.http.get<ClientesRes>(`${builtUrl}`);
  }

  AddNewClient( body: ClientesRes ):Observable<number>{
    return this.http.post<number>(`${environment.url}AddClient` , body);
  }

  DeleteClient( clientId: number ){
    return this.http.delete(`${environment.url}DeleteClient?clientId=${clientId}` , {responseType:'text'});
  }

  UpdateClient( body: ClientesRes ){
    return this.http.put(`${environment.url}EditClient` , body);
  }

  BuildUrl( url: string , parameters ):string{

    const values = Object.values(parameters).filter(( p ) => p);

    if(values.length > 0)url = url += '?';

    const { name , lastName , dni , age } = parameters;

    if(name)url += `name=${name}&`;
    if(lastName)url += `lastName=${lastName}&`;
    if(dni)url += `dni=${dni}&`;
    if(age)url += `age=${age}&`;

    /* removing if last Character is & */
    if( url.slice(-1) === '&' )url = url.slice(0,-1);

    return url;
  }
}
