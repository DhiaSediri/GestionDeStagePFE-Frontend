import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepotConventionDeStageDEPOSEEPourAdminComponent } from './list-depot-convention-de-stage-deposeepour-admin.component';

describe('ListDepotConventionDeStageDEPOSEEPourAdminComponent', () => {
  let component: ListDepotConventionDeStageDEPOSEEPourAdminComponent;
  let fixture: ComponentFixture<ListDepotConventionDeStageDEPOSEEPourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepotConventionDeStageDEPOSEEPourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepotConventionDeStageDEPOSEEPourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
