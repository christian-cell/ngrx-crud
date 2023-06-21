import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../models/appState/appState";
import { ClientsReducers } from "./reducers/clients/clients.reducers";
import { hydratationMetaReducer } from "./hidratation.reducer";

export const reducers : ActionReducerMap<AppState> = {
    clientes : ClientsReducers
}

export function debug( reducer: ActionReducer<any> ): ActionReducer<any>{
    return function ( state , action ){
        console.log('state : ' , state)
        console.log('action : ' , action);

        return reducer(state , action);
    }
}

export const metaReducers : MetaReducer[] = [
    hydratationMetaReducer,
    debug
]