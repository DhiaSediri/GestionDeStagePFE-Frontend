import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesDeStagePourAdminComponent } from './fiches-de-stage-pour-admin.component';

describe('FichesDeStagePourAdminComponent', () => {
  let component: FichesDeStagePourAdminComponent;
  let fixture: ComponentFixture<FichesDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
