import { ClientesRes } from "../clientes/clientes";
import { ClientsFilters } from "../clientes/clientsFilters";

export interface AppState {
    clientes : ClientesRes[],
    clientesFilters : ClientsFilters
}