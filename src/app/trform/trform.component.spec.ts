import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrformComponent } from './trform.component';

describe('TrformComponent', () => {
  let component: TrformComponent;
  let fixture: ComponentFixture<TrformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
