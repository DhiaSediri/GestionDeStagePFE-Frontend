import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffreDeStagePourAdminComponent } from './list-offre-de-stage-pour-admin.component';

describe('ListOffreDeStagePourAdminComponent', () => {
  let component: ListOffreDeStagePourAdminComponent;
  let fixture: ComponentFixture<ListOffreDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffreDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffreDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
