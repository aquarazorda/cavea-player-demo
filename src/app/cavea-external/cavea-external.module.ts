import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CaveaExternalRoutingModule} from './cavea-external-routing.module';
import {WatchComponent} from "../watch/watch.component";
import {ExternalPlayerModule} from "@cavea-plus-monorepo/external-player";


@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    CommonModule,
    CaveaExternalRoutingModule,
    ExternalPlayerModule
  ]
})
export class CaveaExternalModule {
}
