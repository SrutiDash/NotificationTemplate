import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPromptComponent } from './filter-prompt.component';

describe('FilterPromptComponent', () => {
  let component: FilterPromptComponent;
  let fixture: ComponentFixture<FilterPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
