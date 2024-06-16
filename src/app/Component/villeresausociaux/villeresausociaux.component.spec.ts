import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleresausociauxComponent } from './villeresausociaux.component';

describe('VilleresausociauxComponent', () => {
  let component: VilleresausociauxComponent;
  let fixture: ComponentFixture<VilleresausociauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleresausociauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilleresausociauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
