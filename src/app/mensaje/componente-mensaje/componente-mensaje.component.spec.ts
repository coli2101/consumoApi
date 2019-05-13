import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajeComponent } from './componente-mensaje.component';

describe('ComponenteMensajeComponent', () => {
  let component: ComponenteMensajeComponent;
  let fixture: ComponentFixture<ComponenteMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
