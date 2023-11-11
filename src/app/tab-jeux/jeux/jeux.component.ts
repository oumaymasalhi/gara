import { Component, ViewChild} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { aboki, afroWarrrior, agent, angeloSkate, cavemen, deadEffect, duck, game2minSpace, jetPack, kissoro, kongo, ludo, mzito, needforspeed, oldenGeorges, pako, pakoForever, rekt, templeRun, tetragon, twoDot, viking, worldWar } from 'src/assets/faka-data/data';

@Component({
  selector: 'gara-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent {
  
@ViewChild("carousel") carousel : any

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
    margin:21,
    merge:false,
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 1
      },
      600: {
        items: 1.2
      },
      800: {
        items: 2.5
      },
    },
  }


  
}
