import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncityandteleComponent } from './sectioncityandtele.component';

describe('SectioncityandteleComponent', () => {
  let component: SectioncityandteleComponent;
  let fixture: ComponentFixture<SectioncityandteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncityandteleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncityandteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
