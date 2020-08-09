import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsBrowseJobsComponent } from './ins-browse-jobs.component';

describe('InsBrowseJobsComponent', () => {
  let component: InsBrowseJobsComponent;
  let fixture: ComponentFixture<InsBrowseJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsBrowseJobsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsBrowseJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
