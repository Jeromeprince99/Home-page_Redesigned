import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturethreeComponent } from './featurethree.component';

describe('FeaturethreeComponent', () => {
  let component: FeaturethreeComponent;
  let fixture: ComponentFixture<FeaturethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
