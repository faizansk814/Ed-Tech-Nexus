import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenavbarComponent } from './coursenavbar.component';

describe('CoursenavbarComponent', () => {
  let component: CoursenavbarComponent;
  let fixture: ComponentFixture<CoursenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursenavbarComponent]
    });
    fixture = TestBed.createComponent(CoursenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
