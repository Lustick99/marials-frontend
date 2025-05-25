import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFaqComponent } from './services-faq.component';

describe('ServicesFaqComponent', () => {
  let component: ServicesFaqComponent;
  let fixture: ComponentFixture<ServicesFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
