import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoComponent } from './about-co.component';

describe('AboutCoComponent', () => {
  let component: AboutCoComponent;
  let fixture: ComponentFixture<AboutCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
