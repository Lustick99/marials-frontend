import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCarouselComponent } from './partners-carousel.component';

describe('PartnersCarouselComponent', () => {
  let component: PartnersCarouselComponent;
  let fixture: ComponentFixture<PartnersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
