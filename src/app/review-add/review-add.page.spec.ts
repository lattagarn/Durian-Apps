import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewAddPage } from './review-add.page';

describe('ReviewAddPage', () => {
  let component: ReviewAddPage;
  let fixture: ComponentFixture<ReviewAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
