import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesaveComponent } from './scenesave.component';

describe('ScenesaveComponent', () => {
  let component: ScenesaveComponent;
  let fixture: ComponentFixture<ScenesaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
