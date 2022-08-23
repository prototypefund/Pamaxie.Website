/*
 shared.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */


//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

//COMPONENT IMPORTS
import {ImageHeaderComponent} from './components/image-header/image-header.component';
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ImageHeaderComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ImageHeaderComponent,
    DropdownComponent
  ]
})
export class SharedModule {
}
