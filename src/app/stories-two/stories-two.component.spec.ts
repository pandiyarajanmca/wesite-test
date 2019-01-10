import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesTwoComponent } from './stories-two.component';

describe('StoriesTwoComponent', () => {
  let component: StoriesTwoComponent;
  let fixture: ComponentFixture<StoriesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
