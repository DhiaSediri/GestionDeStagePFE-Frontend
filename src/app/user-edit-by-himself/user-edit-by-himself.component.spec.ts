import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditByHimselfComponent } from './user-edit-by-himself.component';

describe('UserEditByHimselfComponent', () => {
  let component: UserEditByHimselfComponent;
  let fixture: ComponentFixture<UserEditByHimselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditByHimselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditByHimselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
