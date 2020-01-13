import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptioncontainerComponent } from './descriptioncontainer.component';

describe('DescriptioncontainerComponent', () => {
  let component: DescriptioncontainerComponent;
  let fixture: ComponentFixture<DescriptioncontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptioncontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptioncontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
