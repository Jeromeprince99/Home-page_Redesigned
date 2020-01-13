import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialModal3Component } from './testimonial-modal3.component';

describe('TestimonialModal3Component', () => {
  let component: TestimonialModal3Component;
  let fixture: ComponentFixture<TestimonialModal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialModal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
