import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioDwoneldAppSecondComponent } from './sectio-dwoneld-app-second.component';

describe('SectioDwoneldAppSecondComponent', () => {
  let component: SectioDwoneldAppSecondComponent;
  let fixture: ComponentFixture<SectioDwoneldAppSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioDwoneldAppSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioDwoneldAppSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
