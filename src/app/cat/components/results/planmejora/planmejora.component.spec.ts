import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmejoraComponent } from './planmejora.component';

describe('PlanmejoraComponent', () => {
  let component: PlanmejoraComponent;
  let fixture: ComponentFixture<PlanmejoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanmejoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanmejoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
