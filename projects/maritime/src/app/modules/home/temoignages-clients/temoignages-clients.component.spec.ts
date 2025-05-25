import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignagesClientsComponent } from './temoignages-clients.component';

describe('TemoignagesClientsComponent', () => {
  let component: TemoignagesClientsComponent;
  let fixture: ComponentFixture<TemoignagesClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemoignagesClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemoignagesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
