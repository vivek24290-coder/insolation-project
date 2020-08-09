import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsJobListComponent } from './ins-job-list.component';

describe('InsJobListComponent', () => {
  let component: InsJobListComponent;
  let fixture: ComponentFixture<InsJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsJobListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
