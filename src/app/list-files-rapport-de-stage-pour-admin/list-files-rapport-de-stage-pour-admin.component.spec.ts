import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesRapportDeStagePourAdminComponent } from './list-files-rapport-de-stage-pour-admin.component';

describe('ListFilesRapportDeStagePourAdminComponent', () => {
  let component: ListFilesRapportDeStagePourAdminComponent;
  let fixture: ComponentFixture<ListFilesRapportDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilesRapportDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilesRapportDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
