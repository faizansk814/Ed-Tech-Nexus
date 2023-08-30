import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenrollComponent } from './studentenroll.component';

describe('StudentenrollComponent', () => {
  let component: StudentenrollComponent;
  let fixture: ComponentFixture<StudentenrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentenrollComponent]
    });
    fixture = TestBed.createComponent(StudentenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
