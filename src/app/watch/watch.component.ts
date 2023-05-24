import { Component, createNgModule, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  @ViewChild('player', { read: ViewContainerRef }) player!: ViewContainerRef;
  
  constructor(
    private injector: Injector
  ) {}
  
  async ngOnInit() {
    const {ExternalPlayer, ExternalPlayerModule} = await import('@cavea-plus-monorepo/external-player');
    const component = this.player.createComponent(ExternalPlayer, {
      ngModuleRef: createNgModule(ExternalPlayerModule, this.injector)
    })

    component.instance.episodeId = 'f468f0d4-368d-11ed-a98d-5d09707a35e7';
    component.instance.slug = 'excepturi-eaque-atque';
    component.instance.language = 'en';
    component.instance.externalWatchSessionToken = '9d9889e0-fa2f-11ed-abcc-83ba591b738cmj08qnj47a';
  }
}
