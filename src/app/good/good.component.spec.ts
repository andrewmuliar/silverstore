/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoodComponent } from './good.component';

describe('GoodComponent', () => {
  let component: GoodComponent;
  let fixture: ComponentFixture<GoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
