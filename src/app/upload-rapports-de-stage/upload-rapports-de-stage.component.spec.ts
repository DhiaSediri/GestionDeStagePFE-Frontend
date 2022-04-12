import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage.component';

describe('UploadRapportsDeStageComponent', () => {
  let component: UploadRapportsDeStageComponent;
  let fixture: ComponentFixture<UploadRapportsDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRapportsDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRapportsDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
