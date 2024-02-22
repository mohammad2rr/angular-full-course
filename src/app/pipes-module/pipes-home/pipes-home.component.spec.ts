import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesHomeComponent } from './pipes-home.component';

describe('PipesHomeComponent', () => {
  let component: PipesHomeComponent;
  let fixture: ComponentFixture<PipesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesHomeComponent]
    });
    fixture = TestBed.createComponent(PipesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
