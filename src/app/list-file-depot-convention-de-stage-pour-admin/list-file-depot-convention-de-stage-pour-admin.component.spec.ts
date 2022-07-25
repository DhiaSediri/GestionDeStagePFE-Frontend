import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFileDepotConventionDeStagePourAdminComponent } from './list-file-depot-convention-de-stage-pour-admin.component';

describe('ListFileDepotConventionDeStagePourAdminComponent', () => {
  let component: ListFileDepotConventionDeStagePourAdminComponent;
  let fixture: ComponentFixture<ListFileDepotConventionDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFileDepotConventionDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFileDepotConventionDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
