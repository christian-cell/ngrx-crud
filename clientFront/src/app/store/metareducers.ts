import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../models/appState/appState";
import { ClientsReducers } from "./reducers/clients/clients.reducers";
import { hydratationMetaReducer } from "./hidratation.reducer";
import { ClientsFiltersReducers } from "./reducers/clients/clientsFilters.reducers";

export const reducers : ActionReducerMap<AppState> = {
    clientes : ClientsReducers,
    clientesFilters: ClientsFiltersReducers
}

export function debug( reducer: ActionReducer<any> ): ActionReducer<any>{
    return function ( state , action ){
        return reducer(state , action);
    }
}

export const metaReducers : MetaReducer[] = [
    hydratationMetaReducer,
    debug
]