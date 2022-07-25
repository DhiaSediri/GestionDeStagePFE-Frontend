import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesOffreDeStagePourAdminComponent } from './list-files-offre-de-stage-pour-admin.component';

describe('ListFilesOffreDeStagePourAdminComponent', () => {
  let component: ListFilesOffreDeStagePourAdminComponent;
  let fixture: ComponentFixture<ListFilesOffreDeStagePourAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilesOffreDeStagePourAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilesOffreDeStagePourAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
