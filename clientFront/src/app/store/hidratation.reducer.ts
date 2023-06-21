import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "../models/appState/appState";

export const hydratationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {

    return ( state , action ) => {
        
        if( action.type === INIT || action.type === UPDATE )
        {
            const storageValue = localStorage.getItem("state");

            if( storageValue ) 
            {
               try 
               {
                return JSON.parse(storageValue);
               }
               catch
               {
                localStorage.removeItem("state");
               }
            }
        }

        const nexState = reducer( state , action );
        localStorage.setItem("state" , JSON.stringify(nexState));

        return nexState;
    }
}