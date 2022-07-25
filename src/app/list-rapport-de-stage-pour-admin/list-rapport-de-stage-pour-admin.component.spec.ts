import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRapportDeStagePourAdminComponent } from './list-rapport-de-stage-pour-admin.component';

describe('ListRapportDeStagePourAdminComponent', () => {
  let component: ListRapportDeStagePourAdminComponent;
  let fixture: ComponentFixture<ListRapportDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRapportDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRapportDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
