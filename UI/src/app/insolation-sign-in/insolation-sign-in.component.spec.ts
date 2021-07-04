import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsolationSignInComponent } from './insolation-sign-in.component';

describe('InsolationSignInComponent', () => {
  let component: InsolationSignInComponent;
  let fixture: ComponentFixture<InsolationSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsolationSignInComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsolationSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
