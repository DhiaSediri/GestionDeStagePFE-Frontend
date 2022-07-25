import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotBilanPeriodiqueFinDuStageComponent } from './encadrant-depot-bilan-periodique-fin-du-stage.component';

describe('EncadrantDepotBilanPeriodiqueFinDuStageComponent', () => {
  let component: EncadrantDepotBilanPeriodiqueFinDuStageComponent;
  let fixture: ComponentFixture<EncadrantDepotBilanPeriodiqueFinDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotBilanPeriodiqueFinDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotBilanPeriodiqueFinDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
