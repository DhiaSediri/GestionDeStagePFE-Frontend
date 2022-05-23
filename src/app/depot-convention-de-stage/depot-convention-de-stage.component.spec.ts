import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotConventionDeStageComponent } from './depot-convention-de-stage.component';

describe('DepotConventionDeStageComponent', () => {
  let component: DepotConventionDeStageComponent;
  let fixture: ComponentFixture<DepotConventionDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotConventionDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotConventionDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
