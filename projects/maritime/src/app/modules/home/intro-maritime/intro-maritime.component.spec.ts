import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMaritimeComponent } from './intro-maritime.component';

describe('IntroMaritimeComponent', () => {
  let component: IntroMaritimeComponent;
  let fixture: ComponentFixture<IntroMaritimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroMaritimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroMaritimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
