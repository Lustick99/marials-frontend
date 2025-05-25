import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieBannerComponent } from './galerie-banner.component';

describe('GalerieBannerComponent', () => {
  let component: GalerieBannerComponent;
  let fixture: ComponentFixture<GalerieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
