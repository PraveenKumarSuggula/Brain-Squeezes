import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QandaAccordianComponent } from './qanda-accordian.component';

describe('QandaAccordianComponent', () => {
  let component: QandaAccordianComponent;
  let fixture: ComponentFixture<QandaAccordianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QandaAccordianComponent]
    });
    fixture = TestBed.createComponent(QandaAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
