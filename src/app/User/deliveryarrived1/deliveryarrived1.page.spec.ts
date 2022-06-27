import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deliveryarrived1Page } from './deliveryarrived1.page';

describe('Deliveryarrived1Page', () => {
  let component: Deliveryarrived1Page;
  let fixture: ComponentFixture<Deliveryarrived1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Deliveryarrived1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deliveryarrived1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
