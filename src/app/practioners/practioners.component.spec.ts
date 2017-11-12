import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractionersComponent } from './practioners.component';

describe('PractionersComponent', () => {
  let component: PractionersComponent;
  let fixture: ComponentFixture<PractionersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractionersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
