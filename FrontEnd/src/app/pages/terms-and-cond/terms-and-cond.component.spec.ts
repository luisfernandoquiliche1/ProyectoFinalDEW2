import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCondComponent } from './terms-and-cond.component';

describe('TermsAndCondComponent', () => {
  let component: TermsAndCondComponent;
  let fixture: ComponentFixture<TermsAndCondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsAndCondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
