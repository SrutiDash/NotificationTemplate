import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUploadComponent } from './record-upload.component';

describe('RecordUploadComponent', () => {
  let component: RecordUploadComponent;
  let fixture: ComponentFixture<RecordUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
