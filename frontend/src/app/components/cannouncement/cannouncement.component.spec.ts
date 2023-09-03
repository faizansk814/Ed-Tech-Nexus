import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannouncementComponent } from './cannouncement.component';

describe('CannouncementComponent', () => {
  let component: CannouncementComponent;
  let fixture: ComponentFixture<CannouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CannouncementComponent]
    });
    fixture = TestBed.createComponent(CannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
