import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkNotificationComponent } from './create-bulk-notification.component';

describe('CreateBulkNotificationComponent', () => {
  let component: CreateBulkNotificationComponent;
  let fixture: ComponentFixture<CreateBulkNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBulkNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBulkNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
