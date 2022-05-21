import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementContentComponent } from './element-content.component';

describe('ElementContentComponent', () => {
  let component: ElementContentComponent;
  let fixture: ComponentFixture<ElementContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
