import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbottomComponent } from './footerbottom.component';

describe('FooterbottomComponent', () => {
  let component: FooterbottomComponent;
  let fixture: ComponentFixture<FooterbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
