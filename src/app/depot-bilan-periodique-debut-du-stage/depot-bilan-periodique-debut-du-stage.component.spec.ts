import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotBilanPeriodiqueDebutDuStageComponent } from './depot-bilan-periodique-debut-du-stage.component';

describe('DepotBilanPeriodiqueDebutDuStageComponent', () => {
  let component: DepotBilanPeriodiqueDebutDuStageComponent;
  let fixture: ComponentFixture<DepotBilanPeriodiqueDebutDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotBilanPeriodiqueDebutDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotBilanPeriodiqueDebutDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
