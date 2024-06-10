import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDownlondAppComponent } from './section-downlond-app.component';

describe('SectionDownlondAppComponent', () => {
  let component: SectionDownlondAppComponent;
  let fixture: ComponentFixture<SectionDownlondAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDownlondAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDownlondAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
