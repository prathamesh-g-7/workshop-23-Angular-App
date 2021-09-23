import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularInfoComponent } from './tabular-info.component';

describe('TabularInfoComponent', () => {
  let component: TabularInfoComponent;
  let fixture: ComponentFixture<TabularInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
