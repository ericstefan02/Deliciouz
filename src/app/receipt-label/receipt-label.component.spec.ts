import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptLabelComponent } from './receipt-label.component';

describe('ReceiptLabelComponent', () => {
  let component: ReceiptLabelComponent;
  let fixture: ComponentFixture<ReceiptLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
