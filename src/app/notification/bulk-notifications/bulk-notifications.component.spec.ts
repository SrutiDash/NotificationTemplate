import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkNotificationsComponent } from './bulk-notifications.component';

describe('BulkNotificationsComponent', () => {
  let component: BulkNotificationsComponent;
  let fixture: ComponentFixture<BulkNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
