import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEditReviewComponent } from './bulk-edit-review.component';

describe('BulkEditReviewComponent', () => {
  let component: BulkEditReviewComponent;
  let fixture: ComponentFixture<BulkEditReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkEditReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEditReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
