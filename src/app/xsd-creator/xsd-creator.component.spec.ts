import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsdCreatorComponent } from './xsd-creator.component';

describe('XsdCreatorComponent', () => {
  let component: XsdCreatorComponent;
  let fixture: ComponentFixture<XsdCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XsdCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XsdCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
