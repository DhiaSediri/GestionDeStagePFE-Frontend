import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffresDeStagePourEtudiantComponent } from './list-offres-de-stage-pour-etudiant.component';

describe('ListOffresDeStagePourEtudiantComponent', () => {
  let component: ListOffresDeStagePourEtudiantComponent;
  let fixture: ComponentFixture<ListOffresDeStagePourEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffresDeStagePourEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffresDeStagePourEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
