import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJeuxComponent } from './tab-jeux.component';

describe('TabJeuxComponent', () => {
  let component: TabJeuxComponent;
  let fixture: ComponentFixture<TabJeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabJeuxComponent]
    });
    fixture = TestBed.createComponent(TabJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
