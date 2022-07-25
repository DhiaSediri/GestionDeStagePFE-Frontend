import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotComponent } from './encadrant-depot.component';

describe('EncadrantDepotComponent', () => {
  let component: EncadrantDepotComponent;
  let fixture: ComponentFixture<EncadrantDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
