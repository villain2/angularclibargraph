import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphStageComponent } from './bar-graph-stage.component';

describe('BarGraphStageComponent', () => {
  let component: BarGraphStageComponent;
  let fixture: ComponentFixture<BarGraphStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
