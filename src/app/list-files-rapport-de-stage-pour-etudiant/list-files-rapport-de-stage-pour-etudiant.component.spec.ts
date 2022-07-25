import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesRapportDeStagePourEtudiantComponent } from './list-files-rapport-de-stage-pour-etudiant.component';

describe('ListFilesRapportDeStagePourEtudiantComponent', () => {
  let component: ListFilesRapportDeStagePourEtudiantComponent;
  let fixture: ComponentFixture<ListFilesRapportDeStagePourEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilesRapportDeStagePourEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilesRapportDeStagePourEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
