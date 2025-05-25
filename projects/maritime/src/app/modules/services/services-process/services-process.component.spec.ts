import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProcessComponent } from './services-process.component';

describe('ServicesProcessComponent', () => {
  let component: ServicesProcessComponent;
  let fixture: ComponentFixture<ServicesProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
