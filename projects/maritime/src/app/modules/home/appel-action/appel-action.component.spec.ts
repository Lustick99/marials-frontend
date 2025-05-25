import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelActionComponent } from './appel-action.component';

describe('AppelActionComponent', () => {
  let component: AppelActionComponent;
  let fixture: ComponentFixture<AppelActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
