import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieIntroComponent } from './galerie-intro.component';

describe('GalerieIntroComponent', () => {
  let component: GalerieIntroComponent;
  let fixture: ComponentFixture<GalerieIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
