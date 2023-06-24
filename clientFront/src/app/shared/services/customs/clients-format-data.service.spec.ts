import { TestBed } from '@angular/core/testing';

import { ClientsFormatDataService } from './clients-format-data.service';

describe('ClientsFormatDataService', () => {
  let service: ClientsFormatDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsFormatDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
