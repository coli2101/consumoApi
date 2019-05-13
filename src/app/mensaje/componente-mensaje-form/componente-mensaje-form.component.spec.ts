import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajeFormComponent } from './componente-mensaje-form.component';

describe('ComponenteMensajeFormComponent', () => {
  let component: ComponenteMensajeFormComponent;
  let fixture: ComponentFixture<ComponenteMensajeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteMensajeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMensajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
