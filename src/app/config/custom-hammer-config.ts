import {HammerGestureConfig} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: {
      direction: Hammer.DIRECTION_HORIZONTAL,
      velocity: 0.5,
      threshold: 100
    },
    pinch: { enable: false },
    rotate: { enable: false }
  } as any;
}
