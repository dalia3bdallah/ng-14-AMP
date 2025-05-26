import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashchartsComponent } from './dashcharts.component';

describe('DashchartsComponent', () => {
  let component: DashchartsComponent;
  let fixture: ComponentFixture<DashchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
