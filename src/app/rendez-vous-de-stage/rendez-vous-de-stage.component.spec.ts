import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousDeStageComponent } from './rendez-vous-de-stage.component';

describe('RendezVousDeStageComponent', () => {
  let component: RendezVousDeStageComponent;
  let fixture: ComponentFixture<RendezVousDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
