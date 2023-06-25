import { createReducer, on } from "@ngrx/store";
import { ClientesRes } from "src/app/models";
import { addClientSuccess, deleteClientSuccess, getClientsSuccess, updateClient } from "../../actions/clients/clients.actions";

export interface ClientsState {
    clients : ClientesRes
}

const initialState : ClientesRes[] = [];

export const ClientsReducers = createReducer(
    initialState,

    on( getClientsSuccess , ( state , {clients} ) => {
      
       state = clients;
       return state;
    }),

    on( addClientSuccess , ( state , { client } ) =>{
        let myState = [...state , client];
        return myState;
    }),

    on( deleteClientSuccess , ( state , {clientId} ) => {
        let myState = state.filter(( e ) => e.clientId === clientId);
        return myState;
    }),

    on( updateClient , ( state , { client } ) => {
        const { clientId } = client;
        let clients = state.map( c => c.clientId === clientId ? client : c );
        return clients;
    })
)