import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetannouncementComponent } from './getannouncement.component';

describe('GetannouncementComponent', () => {
  let component: GetannouncementComponent;
  let fixture: ComponentFixture<GetannouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetannouncementComponent]
    });
    fixture = TestBed.createComponent(GetannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
