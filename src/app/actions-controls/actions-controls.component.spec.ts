import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsControlsComponent } from './actions-controls.component';

describe('ActionsControlsComponent', () => {
  let component: ActionsControlsComponent;
  let fixture: ComponentFixture<ActionsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
