import { TestBed } from '@angular/core/testing';

import { ComponentToSpinnerComponentService } from './component-to-spinner-component.service';

describe('ComponentToSpinnerComponentService', () => {
  let service: ComponentToSpinnerComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentToSpinnerComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
