/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IeltsexamComponent } from './ieltsexam.component';

describe('IeltsexamComponent', () => {
  let component: IeltsexamComponent;
  let fixture: ComponentFixture<IeltsexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeltsexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeltsexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
