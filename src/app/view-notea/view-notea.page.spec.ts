import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewNoteaPage } from './view-notea.page';

describe('ViewNoteaPage', () => {
  let component: ViewNoteaPage;
  let fixture: ComponentFixture<ViewNoteaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoteaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNoteaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
