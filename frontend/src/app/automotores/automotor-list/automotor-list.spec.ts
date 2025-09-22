import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotorList } from './automotor-list';

describe('AutomotorList', () => {
  let component: AutomotorList;
  let fixture: ComponentFixture<AutomotorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomotorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
