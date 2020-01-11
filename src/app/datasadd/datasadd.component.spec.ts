import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasaddComponent } from './datasadd.component';

describe('DatasaddComponent', () => {
  let component: DatasaddComponent;
  let fixture: ComponentFixture<DatasaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
