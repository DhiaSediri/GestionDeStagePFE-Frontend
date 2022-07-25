import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotRapportPremiereVersionComponent } from './encadrant-depot-rapport-premiere-version.component';

describe('EncadrantDepotRapportPremiereVersionComponent', () => {
  let component: EncadrantDepotRapportPremiereVersionComponent;
  let fixture: ComponentFixture<EncadrantDepotRapportPremiereVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotRapportPremiereVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotRapportPremiereVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
