import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCatComponent } from './info-cat.component';

describe('InfoCatComponent', () => {
  let component: InfoCatComponent;
  let fixture: ComponentFixture<InfoCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
