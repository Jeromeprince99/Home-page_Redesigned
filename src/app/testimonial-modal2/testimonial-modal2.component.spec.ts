import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialModal2Component } from './testimonial-modal2.component';

describe('TestimonialModal2Component', () => {
  let component: TestimonialModal2Component;
  let fixture: ComponentFixture<TestimonialModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
