import { Injectable } from '@angular/core';
import { ClientesRes } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ClientsFormatDataService {

  constructor() { }

  FormatClientData( clients : ClientesRes[] ):ClientesRes[]{

    let myClients = clients.map(( c ) => {
      
      const { name , dni } = c;
      
      c.name = name.toUpperCase();
      c.dni = this.RemoveDNIletter( dni );
      
      return c;
    })

    return myClients;
  }

  RemoveDNIletter( dni: string ):string{
    return dni.replace(/\D/g,'');
  }

}
