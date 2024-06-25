import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkfisrtpartComponent } from './howitworkfisrtpart.component';

describe('HowitworkfisrtpartComponent', () => {
  let component: HowitworkfisrtpartComponent;
  let fixture: ComponentFixture<HowitworkfisrtpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowitworkfisrtpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowitworkfisrtpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
