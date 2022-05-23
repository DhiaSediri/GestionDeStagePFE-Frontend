import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotBilanPeriodiqueFinDuStageComponent } from './depot-bilan-periodique-fin-du-stage.component';

describe('DepotBilanPeriodiqueFinDuStageComponent', () => {
  let component: DepotBilanPeriodiqueFinDuStageComponent;
  let fixture: ComponentFixture<DepotBilanPeriodiqueFinDuStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotBilanPeriodiqueFinDuStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotBilanPeriodiqueFinDuStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
