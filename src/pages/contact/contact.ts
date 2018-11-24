import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(3);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }

}
