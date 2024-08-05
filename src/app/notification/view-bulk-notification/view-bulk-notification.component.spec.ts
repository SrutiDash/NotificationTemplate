import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBulkNotificationComponent } from './view-bulk-notification.component';

describe('ViewBulkNotificationComponent', () => {
  let component: ViewBulkNotificationComponent;
  let fixture: ComponentFixture<ViewBulkNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBulkNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBulkNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
