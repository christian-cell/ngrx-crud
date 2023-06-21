import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ClientesService } from "src/app/clientes/services";
import { addClient, addClientSuccess, deleteClient, deleteClientSuccess, getClientsFiltered, getClientsSuccess, updateClient, updateClientSuccess } from "../../actions/clients/clients.actions";
import { catchError, concatMap, exhaustMap, map , mergeMap, of, tap } from "rxjs";
import { ClientesRes } from "src/app/models";

@Injectable()

export class ClientsEffects {
    
    constructor(
        private action$ :                    Actions,
        private clientsServices:             ClientesService
    ){}

    loadClients$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(getClientsFiltered),
            tap((params) => console.log(params)),
            concatMap((action) => {
                console.log(action.parameters)
                return this.clientsServices.LoadClients(action.parameters).pipe(
                    map((clients: any) => getClientsSuccess( { clients } )),
                    catchError((error:any) => of())
                )
            })
        )
    })

    addClient$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(addClient),
            mergeMap(( action ) => {
                console.log(action.client);
                return this.clientsServices.AddNewClient( action.client )
                .pipe(
                    map(( data ) =>{
                        const { client } = action;
                        console.log(client);
                        return addClientSuccess({ client });
                    })
                )
            })
        )
    }) 

    deleteClient$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(deleteClient),
            mergeMap(( action ) => {
                return this.clientsServices.DeleteClient(action.clientId)
                .pipe(
                    map(( data ) => {
                        return deleteClientSuccess({ clientId: action.clientId })
                    })
                )
            })
        )
    })

    updateClient$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(updateClient),
            mergeMap(( action ) => {
                return this.clientsServices.UpdateClient(action.client)
                .pipe(
                    map(( data ) => {
                        const { client } = action;
                        return updateClientSuccess({ client : client })
                    })
                )
            })
        )
    })

}