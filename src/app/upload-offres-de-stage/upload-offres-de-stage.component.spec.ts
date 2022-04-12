import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOffresDeStageComponent } from './upload-offres-de-stage.component';

describe('UploadOffresDeStageComponent', () => {
  let component: UploadOffresDeStageComponent;
  let fixture: ComponentFixture<UploadOffresDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOffresDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOffresDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
