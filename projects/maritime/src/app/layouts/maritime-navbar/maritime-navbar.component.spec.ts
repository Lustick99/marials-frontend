import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimeNavbarComponent } from './maritime-navbar.component';

describe('MaritimeNavbarComponent', () => {
  let component: MaritimeNavbarComponent;
  let fixture: ComponentFixture<MaritimeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritimeNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritimeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
