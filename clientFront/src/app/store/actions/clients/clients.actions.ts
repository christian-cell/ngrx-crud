import { createAction, props } from "@ngrx/store"
import { ClientesRes, ClientsFilters } from "src/app/models"

export const getClientsFiltered = createAction(
    '[Clients] Get clients',
    props<{ parameters ? : ClientsFilters }>()
)

export const getClientsSuccess = createAction(
    '[Clients] Get clients success',
    
    props<{ clients : ClientesRes[] }>()  
)

export const addClient = createAction(
    '[Clients] Add client',
    props<{ client : ClientesRes }>()
)

export const addClientSuccess = createAction(
    '[Clients] Add client success',
    props<{ client : ClientesRes }>()
)

export const deleteClient = createAction(
    '[Clients] Delete Client',
    props<{ clientId: number }>()
)

export const deleteClientSuccess = createAction(
    '[Clients] Delete Client success',
    props<{ clientId: number }>()
)

export const updateClient = createAction(
    '[Clients] Update Client',
    props<{ client: ClientesRes }>()
)

export const updateClientSuccess = createAction(
    '[Clients] Update Client success',
    props<{ client: ClientesRes }>()
)

