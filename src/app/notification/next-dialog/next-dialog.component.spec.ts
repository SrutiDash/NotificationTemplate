import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDialogComponent } from './next-dialog.component';

describe('NextDialogComponent', () => {
  let component: NextDialogComponent;
  let fixture: ComponentFixture<NextDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
