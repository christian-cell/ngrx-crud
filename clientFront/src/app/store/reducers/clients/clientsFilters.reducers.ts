import { createReducer, on } from "@ngrx/store";
import { ClientsFilters } from "src/app/models";
import { addClientsFilters } from "../../actions/clients/clientsFilters.actions";

export interface ClientsFiltersState {
    clientsFilters : ClientsFilters;
}

const initialState : ClientsFilters = {name : '' , lastName : '' , age : 0 , dni: ''};

export const ClientsFiltersReducers = createReducer(
    initialState,

    on( addClientsFilters , ( state , { clientsFilters }  ) => {
        return clientsFilters;
    }),
)