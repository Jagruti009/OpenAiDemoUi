import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessProjectComponent } from './process-project.component';

describe('ProcessProjectComponent', () => {
  let component: ProcessProjectComponent;
  let fixture: ComponentFixture<ProcessProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessProjectComponent]
    });
    fixture = TestBed.createComponent(ProcessProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
