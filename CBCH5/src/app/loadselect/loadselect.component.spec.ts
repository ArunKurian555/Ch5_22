import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadselectComponent } from './loadselect.component';

describe('LoadselectComponent', () => {
  let component: LoadselectComponent;
  let fixture: ComponentFixture<LoadselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
