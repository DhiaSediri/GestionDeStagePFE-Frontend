import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRapportsDeStagePourEtudiantComponent } from './list-rapports-de-stage-pour-etudiant.component';

describe('ListRapportsDeStagePourEtudiantComponent', () => {
  let component: ListRapportsDeStagePourEtudiantComponent;
  let fixture: ComponentFixture<ListRapportsDeStagePourEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRapportsDeStagePourEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRapportsDeStagePourEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
