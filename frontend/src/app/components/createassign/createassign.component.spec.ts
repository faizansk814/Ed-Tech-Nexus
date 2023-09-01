import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassignComponent } from './createassign.component';

describe('CreateassignComponent', () => {
  let component: CreateassignComponent;
  let fixture: ComponentFixture<CreateassignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateassignComponent]
    });
    fixture = TestBed.createComponent(CreateassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
