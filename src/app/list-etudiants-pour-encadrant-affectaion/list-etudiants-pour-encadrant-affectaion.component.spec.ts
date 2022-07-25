import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantsPourEncadrantAffectaionComponent } from './list-etudiants-pour-encadrant-affectaion.component';

describe('ListEtudiantsPourEncadrantAffectaionComponent', () => {
  let component: ListEtudiantsPourEncadrantAffectaionComponent;
  let fixture: ComponentFixture<ListEtudiantsPourEncadrantAffectaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudiantsPourEncadrantAffectaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantsPourEncadrantAffectaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
