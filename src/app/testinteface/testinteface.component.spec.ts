import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestintefaceComponent } from './testinteface.component';

describe('TestintefaceComponent', () => {
  let component: TestintefaceComponent;
  let fixture: ComponentFixture<TestintefaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestintefaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestintefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
