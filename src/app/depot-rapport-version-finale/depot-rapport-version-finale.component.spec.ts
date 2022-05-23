import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotRapportVersionFinaleComponent } from './depot-rapport-version-finale.component';

describe('DepotRapportVersionFinaleComponent', () => {
  let component: DepotRapportVersionFinaleComponent;
  let fixture: ComponentFixture<DepotRapportVersionFinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotRapportVersionFinaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotRapportVersionFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
