import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelayerComponent } from './sidelayer.component';

describe('SidelayerComponent', () => {
  let component: SidelayerComponent;
  let fixture: ComponentFixture<SidelayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidelayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
