import { TestBed } from '@angular/core/testing';

import { SegundaAulaService } from './segunda-aula.service';

describe('SegundaAulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SegundaAulaService = TestBed.get(SegundaAulaService);
    expect(service).toBeTruthy();
  });
});
