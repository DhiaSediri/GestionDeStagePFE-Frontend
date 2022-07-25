import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotBilanPeriodiqueDebutDuStageComponent } from './encadrant-depot-bilan-periodique-debut-du-stage.component';

describe('EncadrantDepotBilanPeriodiqueDebutDuStageComponent', () => {
  let component: EncadrantDepotBilanPeriodiqueDebutDuStageComponent;
  let fixture: ComponentFixture<EncadrantDepotBilanPeriodiqueDebutDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotBilanPeriodiqueDebutDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotBilanPeriodiqueDebutDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
