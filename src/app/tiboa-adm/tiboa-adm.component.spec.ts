import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiboaAdmComponent } from './tiboa-adm.component';

describe('TiboaAdmComponent', () => {
  let component: TiboaAdmComponent;
  let fixture: ComponentFixture<TiboaAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiboaAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiboaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
