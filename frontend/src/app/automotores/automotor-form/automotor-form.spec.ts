import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotorForm } from './automotor-form';

describe('AutomotorForm', () => {
  let component: AutomotorForm;
  let fixture: ComponentFixture<AutomotorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomotorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
