import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRapportsComponent } from './upload-rapports.component';

describe('UploadRapportsComponent', () => {
  let component: UploadRapportsComponent;
  let fixture: ComponentFixture<UploadRapportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRapportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRapportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
