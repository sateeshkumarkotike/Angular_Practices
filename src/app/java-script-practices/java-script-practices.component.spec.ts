import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptPracticesComponent } from './java-script-practices.component';

describe('JavaScriptPracticesComponent', () => {
  let component: JavaScriptPracticesComponent;
  let fixture: ComponentFixture<JavaScriptPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
