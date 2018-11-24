import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController) {
  }

  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(2);
    }
  }

}
