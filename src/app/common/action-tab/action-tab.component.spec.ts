import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTabComponent } from './action-tab.component';

describe('ActionTabComponent', () => {
  let component: ActionTabComponent;
  let fixture: ComponentFixture<ActionTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionTabComponent]
    });
    fixture = TestBed.createComponent(ActionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
