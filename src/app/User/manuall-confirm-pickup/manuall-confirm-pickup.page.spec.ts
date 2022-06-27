import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManuallConfirmPickupPage } from './manuall-confirm-pickup.page';

describe('ManuallConfirmPickupPage', () => {
  let component: ManuallConfirmPickupPage;
  let fixture: ComponentFixture<ManuallConfirmPickupPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuallConfirmPickupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManuallConfirmPickupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
