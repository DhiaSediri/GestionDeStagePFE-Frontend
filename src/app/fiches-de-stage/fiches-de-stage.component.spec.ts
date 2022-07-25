import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesDeStageComponent } from './fiches-de-stage.component';

describe('FichesDeStageComponent', () => {
  let component: FichesDeStageComponent;
  let fixture: ComponentFixture<FichesDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
