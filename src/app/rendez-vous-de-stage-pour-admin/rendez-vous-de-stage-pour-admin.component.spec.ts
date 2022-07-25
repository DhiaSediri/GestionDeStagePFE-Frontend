import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousDeStagePourAdminComponent } from './rendez-vous-de-stage-pour-admin.component';

describe('RendezVousDeStagePourAdminComponent', () => {
  let component: RendezVousDeStagePourAdminComponent;
  let fixture: ComponentFixture<RendezVousDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
