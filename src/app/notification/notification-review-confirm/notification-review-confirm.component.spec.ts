import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReviewConfirmComponent } from './notification-review-confirm.component';

describe('NotificationReviewConfirmComponent', () => {
  let component: NotificationReviewConfirmComponent;
  let fixture: ComponentFixture<NotificationReviewConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationReviewConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationReviewConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
