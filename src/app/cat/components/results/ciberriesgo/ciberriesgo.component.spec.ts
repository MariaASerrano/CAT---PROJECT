import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiberriesgoComponent } from './ciberriesgo.component';

describe('CiberriesgoComponent', () => {
  let component: CiberriesgoComponent;
  let fixture: ComponentFixture<CiberriesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiberriesgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiberriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
