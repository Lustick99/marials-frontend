import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCoordonneesComponent } from './contact-coordonnees.component';

describe('ContactCoordonneesComponent', () => {
  let component: ContactCoordonneesComponent;
  let fixture: ComponentFixture<ContactCoordonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCoordonneesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCoordonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
