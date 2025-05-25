import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeBannerComponent } from './equipe-banner.component';

describe('EquipeBannerComponent', () => {
  let component: EquipeBannerComponent;
  let fixture: ComponentFixture<EquipeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
