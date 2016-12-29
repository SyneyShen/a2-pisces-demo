/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordsexamComponent } from './wordsexam.component';

describe('WordsexamComponent', () => {
  let component: WordsexamComponent;
  let fixture: ComponentFixture<WordsexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
