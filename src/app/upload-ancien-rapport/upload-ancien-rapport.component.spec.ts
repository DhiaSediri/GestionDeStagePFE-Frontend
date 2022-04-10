import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAncienRapportComponent } from './upload-ancien-rapport.component';

describe('UploadAncienRapportComponent', () => {
  let component: UploadAncienRapportComponent;
  let fixture: ComponentFixture<UploadAncienRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAncienRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAncienRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
