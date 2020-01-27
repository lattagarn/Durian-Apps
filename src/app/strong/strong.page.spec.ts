import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrongPage } from './strong.page';

describe('StrongPage', () => {
  let component: StrongPage;
  let fixture: ComponentFixture<StrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
