import { TestBed } from '@angular/core/testing';

import { OpenAIDemoService } from './open-aidemo.service';

describe('OpenAIDemoService', () => {
  let service: OpenAIDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAIDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
