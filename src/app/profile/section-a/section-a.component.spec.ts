import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAComponent } from './section-a.component';

describe('SectionAComponent', () => {
  let component: SectionAComponent;
  let fixture: ComponentFixture<SectionAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAComponent]
    });
    fixture = TestBed.createComponent(SectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
