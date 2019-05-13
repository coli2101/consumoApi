import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajeListaComponent } from './componente-mensaje-lista.component';

describe('ComponenteMensajeListaComponent', () => {
  let component: ComponenteMensajeListaComponent;
  let fixture: ComponentFixture<ComponenteMensajeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteMensajeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMensajeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
