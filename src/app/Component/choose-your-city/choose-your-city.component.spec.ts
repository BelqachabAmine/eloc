import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourCityComponent } from './choose-your-city.component';

describe('ChooseYourCityComponent', () => {
  let component: ChooseYourCityComponent;
  let fixture: ComponentFixture<ChooseYourCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseYourCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
