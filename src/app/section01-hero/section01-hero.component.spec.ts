import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section01HeroComponent } from './section01-hero.component';

describe('Section01HeroComponent', () => {
  let component: Section01HeroComponent;
  let fixture: ComponentFixture<Section01HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section01HeroComponent]
    });
    fixture = TestBed.createComponent(Section01HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
