import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccusessComponent } from './succusess.component';

describe('SuccusessComponent', () => {
  let component: SuccusessComponent;
  let fixture: ComponentFixture<SuccusessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccusessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccusessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
