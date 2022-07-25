import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepotConventionDeStagePouAdminComponent } from './list-depot-convention-de-stage-pou-admin.component';

describe('ListDepotConventionDeStagePouAdminComponent', () => {
  let component: ListDepotConventionDeStagePouAdminComponent;
  let fixture: ComponentFixture<ListDepotConventionDeStagePouAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepotConventionDeStagePouAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepotConventionDeStagePouAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
