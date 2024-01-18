import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QandAPopupComponent } from './qanda-popup.component';

describe('QandAPopupComponent', () => {
  let component: QandAPopupComponent;
  let fixture: ComponentFixture<QandAPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QandAPopupComponent]
    });
    fixture = TestBed.createComponent(QandAPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
