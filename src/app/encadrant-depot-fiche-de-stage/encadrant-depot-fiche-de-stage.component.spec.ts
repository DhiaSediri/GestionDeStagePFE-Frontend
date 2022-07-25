import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotFicheDeStageComponent } from './encadrant-depot-fiche-de-stage.component';

describe('EncadrantDepotFicheDeStageComponent', () => {
  let component: EncadrantDepotFicheDeStageComponent;
  let fixture: ComponentFixture<EncadrantDepotFicheDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotFicheDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotFicheDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
