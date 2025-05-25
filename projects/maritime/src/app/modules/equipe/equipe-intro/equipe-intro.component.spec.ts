import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeIntroComponent } from './equipe-intro.component';

describe('EquipeIntroComponent', () => {
  let component: EquipeIntroComponent;
  let fixture: ComponentFixture<EquipeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
