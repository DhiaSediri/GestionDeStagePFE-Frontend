import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAcademicSupervisorComponent } from './board-academic-supervisor.component';

describe('BoardAcademicSupervisorComponent', () => {
  let component: BoardAcademicSupervisorComponent;
  let fixture: ComponentFixture<BoardAcademicSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAcademicSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAcademicSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
