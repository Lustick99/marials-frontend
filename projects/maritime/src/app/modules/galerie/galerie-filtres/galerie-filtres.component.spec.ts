import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieFiltresComponent } from './galerie-filtres.component';

describe('GalerieFiltresComponent', () => {
  let component: GalerieFiltresComponent;
  let fixture: ComponentFixture<GalerieFiltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieFiltresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
