import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system.component';
import { MdlModule } from 'angular2-mdl';

import { routing } from './system.routing';
import { StandardComponent } from './standard/standard.component';
import { WordsexamComponent } from './wordsexam/wordsexam.component';
import { IeltsexamComponent } from './ieltsexam/ieltsexam.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdlModule
  ],
  declarations: [HomeComponent, SystemComponent, StandardComponent, WordsexamComponent, IeltsexamComponent]
})
export class SystemModule { }
