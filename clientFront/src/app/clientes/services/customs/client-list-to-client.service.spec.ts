import { TestBed } from '@angular/core/testing';

import { ClientListToClientService } from './client-list-to-client.service';

describe('ClientListToClientService', () => {
  let service: ClientListToClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListToClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
