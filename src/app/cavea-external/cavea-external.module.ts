import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CaveaExternalRoutingModule} from './cavea-external-routing.module';
import {WatchComponent} from "../watch/watch.component";

@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    CommonModule,
    CaveaExternalRoutingModule,
  ]
})
export class CaveaExternalModule {
}
