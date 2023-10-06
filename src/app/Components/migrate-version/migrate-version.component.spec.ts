import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateVersionComponent } from './migrate-version.component';

describe('MigrateVersionComponent', () => {
  let component: MigrateVersionComponent;
  let fixture: ComponentFixture<MigrateVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrateVersionComponent]
    });
    fixture = TestBed.createComponent(MigrateVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
