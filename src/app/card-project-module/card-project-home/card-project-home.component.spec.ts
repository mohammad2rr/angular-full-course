import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectHomeComponent } from './card-project-home.component';

describe('CardProjectHomeComponent', () => {
  let component: CardProjectHomeComponent;
  let fixture: ComponentFixture<CardProjectHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjectHomeComponent]
    });
    fixture = TestBed.createComponent(CardProjectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
