import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section05ContactComponent } from './section05-contact.component';

describe('Section05ContactComponent', () => {
  let component: Section05ContactComponent;
  let fixture: ComponentFixture<Section05ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section05ContactComponent]
    });
    fixture = TestBed.createComponent(Section05ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
