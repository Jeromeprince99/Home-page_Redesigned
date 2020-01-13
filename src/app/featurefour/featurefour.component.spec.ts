import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturefourComponent } from './featurefour.component';

describe('FeaturefourComponent', () => {
  let component: FeaturefourComponent;
  let fixture: ComponentFixture<FeaturefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
