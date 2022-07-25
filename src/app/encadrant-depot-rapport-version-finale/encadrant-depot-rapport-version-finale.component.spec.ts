import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotRapportVersionFinaleComponent } from './encadrant-depot-rapport-version-finale.component';

describe('EncadrantDepotRapportVersionFinaleComponent', () => {
  let component: EncadrantDepotRapportVersionFinaleComponent;
  let fixture: ComponentFixture<EncadrantDepotRapportVersionFinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotRapportVersionFinaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotRapportVersionFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
