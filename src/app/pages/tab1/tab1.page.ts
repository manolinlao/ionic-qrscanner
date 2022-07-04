import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnDestroy, OnInit {
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit(): void {
    console.log('tab1. oninit');
  }
  ngOnDestroy(): void {
    console.log('tab1. ondestroy');
  }

  ionViewDidEnter() {
    console.log('viewDidEnter');
    this.scan();
  }

  ionViewDidLeave() {
    console.log('viewDidLeave');
  }

  ionViewWillEnter() {
    console.log('viewWillEnter');
  }

  ionViewWillLeave() {
    console.log('viewWillLeave');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('barcoce data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
