import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DurianPage } from './durian.page';

describe('DurianPage', () => {
  let component: DurianPage;
  let fixture: ComponentFixture<DurianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DurianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
