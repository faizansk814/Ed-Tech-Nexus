import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorassignComponent } from './instructorassign.component';

describe('InstructorassignComponent', () => {
  let component: InstructorassignComponent;
  let fixture: ComponentFixture<InstructorassignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorassignComponent]
    });
    fixture = TestBed.createComponent(InstructorassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
