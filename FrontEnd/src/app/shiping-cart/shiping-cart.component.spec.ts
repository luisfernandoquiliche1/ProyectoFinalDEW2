import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingCartComponent } from './shiping-cart.component';

describe('ShipingCartComponent', () => {
  let component: ShipingCartComponent;
  let fixture: ComponentFixture<ShipingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipingCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
