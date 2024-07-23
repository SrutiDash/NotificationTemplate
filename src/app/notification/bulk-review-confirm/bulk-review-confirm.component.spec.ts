import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReviewConfirmComponent } from './bulk-review-confirm.component';

describe('BulkReviewConfirmComponent', () => {
  let component: BulkReviewConfirmComponent;
  let fixture: ComponentFixture<BulkReviewConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkReviewConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkReviewConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
