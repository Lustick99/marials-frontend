import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeMissionsComponent } from './equipe-missions.component';

describe('EquipeMissionsComponent', () => {
  let component: EquipeMissionsComponent;
  let fixture: ComponentFixture<EquipeMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeMissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
