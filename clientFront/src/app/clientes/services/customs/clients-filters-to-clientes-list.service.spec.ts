import { TestBed } from '@angular/core/testing';

import { ClientsFiltersToClientesListService } from './clients-filters-to-clientes-list.service';

describe('ClientsFiltersToClientesListService', () => {
  let service: ClientsFiltersToClientesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsFiltersToClientesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
