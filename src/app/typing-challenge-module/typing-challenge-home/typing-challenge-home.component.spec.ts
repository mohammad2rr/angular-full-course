import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingChallengeHomeComponent } from './typing-challenge-home.component';

describe('TypingChallengeHomeComponent', () => {
  let component: TypingChallengeHomeComponent;
  let fixture: ComponentFixture<TypingChallengeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingChallengeHomeComponent]
    });
    fixture = TestBed.createComponent(TypingChallengeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
