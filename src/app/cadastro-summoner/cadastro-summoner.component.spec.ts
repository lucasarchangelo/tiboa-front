import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSummonerComponent } from './cadastro-summoner.component';

describe('CadastroSummonerComponent', () => {
  let component: CadastroSummonerComponent;
  let fixture: ComponentFixture<CadastroSummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSummonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
