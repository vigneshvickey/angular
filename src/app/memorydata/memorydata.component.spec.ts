import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorydataComponent } from './memorydata.component';

describe('MemorydataComponent', () => {
  let component: MemorydataComponent;
  let fixture: ComponentFixture<MemorydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
