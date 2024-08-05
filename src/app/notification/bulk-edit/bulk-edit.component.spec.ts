import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEditComponent } from './bulk-edit.component';

describe('BulkEditComponent', () => {
  let component: BulkEditComponent;
  let fixture: ComponentFixture<BulkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
