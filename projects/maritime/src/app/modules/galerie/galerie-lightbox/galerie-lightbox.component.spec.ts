import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieLightboxComponent } from './galerie-lightbox.component';

describe('GalerieLightboxComponent', () => {
  let component: GalerieLightboxComponent;
  let fixture: ComponentFixture<GalerieLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieLightboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
