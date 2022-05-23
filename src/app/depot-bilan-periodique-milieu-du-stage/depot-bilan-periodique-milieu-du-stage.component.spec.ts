import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotBilanPeriodiqueMilieuDuStageComponent } from './depot-bilan-periodique-milieu-du-stage.component';

describe('DepotBilanPeriodiqueMilieuDuStageComponent', () => {
  let component: DepotBilanPeriodiqueMilieuDuStageComponent;
  let fixture: ComponentFixture<DepotBilanPeriodiqueMilieuDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotBilanPeriodiqueMilieuDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotBilanPeriodiqueMilieuDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
