import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotRapportPremiereVersionComponent } from './depot-rapport-premiere-version.component';

describe('DepotRapportPremiereVersionComponent', () => {
  let component: DepotRapportPremiereVersionComponent;
  let fixture: ComponentFixture<DepotRapportPremiereVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotRapportPremiereVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotRapportPremiereVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
