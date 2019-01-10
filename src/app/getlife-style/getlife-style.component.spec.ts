import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlifeStyleComponent } from './getlife-style.component';

describe('GetlifeStyleComponent', () => {
  let component: GetlifeStyleComponent;
  let fixture: ComponentFixture<GetlifeStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetlifeStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
