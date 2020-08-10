import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsSearchjobsComponent } from './ins-searchjobs.component';

describe('InsSearchjobsComponent', () => {
  let component: InsSearchjobsComponent;
  let fixture: ComponentFixture<InsSearchjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsSearchjobsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsSearchjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
