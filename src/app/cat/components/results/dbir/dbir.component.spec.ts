import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBIRComponent } from './dbir.component';

describe('DBIRComponent', () => {
  let component: DBIRComponent;
  let fixture: ComponentFixture<DBIRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBIRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
