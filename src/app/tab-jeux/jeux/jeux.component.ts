import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { aboki, afroWarrrior, agent, angeloSkate, cavemen, deadEffect, duck, game2minSpace, jetPack, kissoro, kongo, ludo, mzito, needforspeed, oldenGeorges, pako, pakoForever, rekt, templeRun, tetragon, twoDot, viking, worldWar } from 'src/assets/faka-data/data';

@Component({
  selector: 'gara-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent {
  
  jeuxVedette = [ pakoForever, twoDot,  ]
  continue = [oldenGeorges, cavemen, rekt, afroWarrrior,oldenGeorges, cavemen, rekt, afroWarrrior]
  news = [twoDot, pako, game2minSpace, rekt]
  recommand = [templeRun, cavemen, pakoForever, angeloSkate]
  masska = [kissoro, oldenGeorges]
  studioAfricain = [mzito, aboki, oldenGeorges, ludo, kissoro, afroWarrrior]
  tendance = [tetragon, needforspeed]
  autre = [duck, tetragon, rekt, viking]
  action = [agent, deadEffect, worldWar, jetPack, afroWarrrior, kongo]

  customVedetteOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:21,
    responsive: {
      0: {
        items: 1.2
      },
      600: {
        items: 2
      },
      800: {
        items: 2.5
      },
    },
  }
  
}
