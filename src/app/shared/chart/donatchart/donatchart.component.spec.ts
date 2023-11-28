import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatchartComponent } from './donatchart.component';

describe('DonatchartComponent', () => {
  let component: DonatchartComponent;
  let fixture: ComponentFixture<DonatchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonatchartComponent]
    });
    fixture = TestBed.createComponent(DonatchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
