import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductosComponent } from './categoria-productos.component';

describe('CategoriaProductosComponent', () => {
  let component: CategoriaProductosComponent;
  let fixture: ComponentFixture<CategoriaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
