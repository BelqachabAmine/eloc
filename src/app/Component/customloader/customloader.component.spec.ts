import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomloaderComponent } from './customloader.component';

describe('CustomloaderComponent', () => {
  let component: CustomloaderComponent;
  let fixture: ComponentFixture<CustomloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
