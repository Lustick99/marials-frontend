import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieGridComponent } from './galerie-grid.component';

describe('GalerieGridComponent', () => {
  let component: GalerieGridComponent;
  let fixture: ComponentFixture<GalerieGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
