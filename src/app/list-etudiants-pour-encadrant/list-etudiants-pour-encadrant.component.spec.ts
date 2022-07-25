import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantsPourEncadrantComponent } from './list-etudiants-pour-encadrant.component';

describe('ListEtudiantsPourEncadrantComponent', () => {
  let component: ListEtudiantsPourEncadrantComponent;
  let fixture: ComponentFixture<ListEtudiantsPourEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudiantsPourEncadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantsPourEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
