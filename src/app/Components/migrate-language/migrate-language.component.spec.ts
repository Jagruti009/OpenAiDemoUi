import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateLanguageComponent } from './migrate-language.component';

describe('MigrateLanguageComponent', () => {
  let component: MigrateLanguageComponent;
  let fixture: ComponentFixture<MigrateLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrateLanguageComponent]
    });
    fixture = TestBed.createComponent(MigrateLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
