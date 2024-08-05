import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReviewComponent } from './notification-review.component';

describe('NotificationReviewComponent', () => {
  let component: NotificationReviewComponent;
  let fixture: ComponentFixture<NotificationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
