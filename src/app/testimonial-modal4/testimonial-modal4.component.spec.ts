import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialModal4Component } from './testimonial-modal4.component';

describe('TestimonialModal4Component', () => {
  let component: TestimonialModal4Component;
  let fixture: ComponentFixture<TestimonialModal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialModal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialModal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
