import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCtaComponent } from './services-cta.component';

describe('ServicesCtaComponent', () => {
  let component: ServicesCtaComponent;
  let fixture: ComponentFixture<ServicesCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
