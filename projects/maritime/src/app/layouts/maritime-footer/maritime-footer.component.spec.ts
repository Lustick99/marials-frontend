import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimeFooterComponent } from './maritime-footer.component';

describe('MaritimeFooterComponent', () => {
  let component: MaritimeFooterComponent;
  let fixture: ComponentFixture<MaritimeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritimeFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritimeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
