import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBreakdownComponent } from './create-breakdown.component';

describe('CreateBreakdownComponent', () => {
  let component: CreateBreakdownComponent;
  let fixture: ComponentFixture<CreateBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBreakdownComponent]
    });
    fixture = TestBed.createComponent(CreateBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
