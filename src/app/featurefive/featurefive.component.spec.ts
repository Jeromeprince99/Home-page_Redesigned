import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturefiveComponent } from './featurefive.component';

describe('FeaturefiveComponent', () => {
  let component: FeaturefiveComponent;
  let fixture: ComponentFixture<FeaturefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
