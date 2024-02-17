import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorHomeComponent } from './password-generator-home.component';

describe('PasswordGeneratorHomeComponent', () => {
  let component: PasswordGeneratorHomeComponent;
  let fixture: ComponentFixture<PasswordGeneratorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordGeneratorHomeComponent]
    });
    fixture = TestBed.createComponent(PasswordGeneratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
