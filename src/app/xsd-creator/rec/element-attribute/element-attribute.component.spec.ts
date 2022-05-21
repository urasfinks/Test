import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAttributeComponent } from './element-attribute.component';

describe('ElementAttributeComponent', () => {
  let component: ElementAttributeComponent;
  let fixture: ComponentFixture<ElementAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
