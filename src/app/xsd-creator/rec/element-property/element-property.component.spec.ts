import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPropertyComponent } from './element-property.component';

describe('ElementPropertyComponent', () => {
  let component: ElementPropertyComponent;
  let fixture: ComponentFixture<ElementPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
