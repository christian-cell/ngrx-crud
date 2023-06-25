import { createSelector } from "@ngrx/store";
import { ClientesRes } from "src/app/models";
import { AppState } from "src/app/models/appState/appState";

export const selectClient = ( state : AppState ) => state.clientes;

//selector by id
export const selectClientByAge = (clientAge : number) => 
createSelector(
    selectClient,
    (clients: ClientesRes[]) =>
    clients.find(c => c.age === clientAge)
)

export const selectClientById = (clientId : number) => 
createSelector(
    selectClient,
    (clients: ClientesRes[]) =>
    {
        if(clients){
            if(clients.find(c => c.clientId === +clientId)){
                return clients.find(c => c.clientId === +clientId)
            }
            else
            {
                return 0;
            }
        }
        
        
    }
)