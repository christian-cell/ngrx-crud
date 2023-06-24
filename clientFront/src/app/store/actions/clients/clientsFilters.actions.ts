import { createAction, props } from "@ngrx/store";
import { ClientsFilters } from "src/app/models";

export const addClientsFilters = createAction(
    '[ClientsFilters] Add clients Filters',
    props<{ clientsFilters ? : ClientsFilters }>()
)