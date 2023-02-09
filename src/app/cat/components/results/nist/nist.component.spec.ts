import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NISTComponent } from './nist.component';

describe('NISTComponent', () => {
  let component: NISTComponent;
  let fixture: ComponentFixture<NISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NISTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
