import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotFicheDeStageComponent } from './depot-fiche-de-stage.component';

describe('DepotFicheDeStageComponent', () => {
  let component: DepotFicheDeStageComponent;
  let fixture: ComponentFixture<DepotFicheDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotFicheDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotFicheDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
