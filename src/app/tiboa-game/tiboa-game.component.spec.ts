import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiboaGameComponent } from './tiboa-game.component';

describe('TiboaGameComponent', () => {
  let component: TiboaGameComponent;
  let fixture: ComponentFixture<TiboaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiboaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiboaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
