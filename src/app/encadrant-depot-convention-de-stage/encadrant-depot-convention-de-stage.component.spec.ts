import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotConventionDeStageComponent } from './encadrant-depot-convention-de-stage.component';

describe('EncadrantDepotConventionDeStageComponent', () => {
  let component: EncadrantDepotConventionDeStageComponent;
  let fixture: ComponentFixture<EncadrantDepotConventionDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotConventionDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotConventionDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
