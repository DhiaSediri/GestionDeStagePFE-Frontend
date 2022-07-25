import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesOffreDeStagePourEtudiantComponent } from './list-files-offre-de-stage-pour-etudiant.component';

describe('ListFilesOffreDeStagePourEtudiantComponent', () => {
  let component: ListFilesOffreDeStagePourEtudiantComponent;
  let fixture: ComponentFixture<ListFilesOffreDeStagePourEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilesOffreDeStagePourEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilesOffreDeStagePourEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
