import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotJournalDeStageComponent } from './depot-journal-de-stage.component';

describe('DepotJournalDeStageComponent', () => {
  let component: DepotJournalDeStageComponent;
  let fixture: ComponentFixture<DepotJournalDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotJournalDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotJournalDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
