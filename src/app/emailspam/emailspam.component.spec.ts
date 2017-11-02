/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmailspamComponent } from './emailspam.component';

describe('EmailspamComponent', () => {
  let component: EmailspamComponent;
  let fixture: ComponentFixture<EmailspamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailspamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailspamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
