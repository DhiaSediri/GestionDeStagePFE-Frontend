import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotBilanPeriodiqueMilieuDuStageComponent } from './encadrant-depot-bilan-periodique-milieu-du-stage.component';

describe('EncadrantDepotBilanPeriodiqueMilieuDuStageComponent', () => {
  let component: EncadrantDepotBilanPeriodiqueMilieuDuStageComponent;
  let fixture: ComponentFixture<EncadrantDepotBilanPeriodiqueMilieuDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotBilanPeriodiqueMilieuDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotBilanPeriodiqueMilieuDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
