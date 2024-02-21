import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section03SkillsComponent } from './section03-skills.component';

describe('Section03SkillsComponent', () => {
  let component: Section03SkillsComponent;
  let fixture: ComponentFixture<Section03SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section03SkillsComponent]
    });
    fixture = TestBed.createComponent(Section03SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
