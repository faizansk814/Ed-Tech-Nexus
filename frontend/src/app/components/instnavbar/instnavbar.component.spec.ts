import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstnavbarComponent } from './instnavbar.component';

describe('InstnavbarComponent', () => {
  let component: InstnavbarComponent;
  let fixture: ComponentFixture<InstnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstnavbarComponent]
    });
    fixture = TestBed.createComponent(InstnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
