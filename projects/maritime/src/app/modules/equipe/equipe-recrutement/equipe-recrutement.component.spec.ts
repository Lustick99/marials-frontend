import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeRecrutementComponent } from './equipe-recrutement.component';

describe('EquipeRecrutementComponent', () => {
  let component: EquipeRecrutementComponent;
  let fixture: ComponentFixture<EquipeRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeRecrutementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
