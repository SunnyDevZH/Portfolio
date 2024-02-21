import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section02AboutComponent } from './section02-about.component';

describe('Section02AboutComponent', () => {
  let component: Section02AboutComponent;
  let fixture: ComponentFixture<Section02AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section02AboutComponent]
    });
    fixture = TestBed.createComponent(Section02AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
