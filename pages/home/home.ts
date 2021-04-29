import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  balanceamount: number;
  paymentTerm: number;
  totalinterestpayable: number;
  totalamountpayable: number;
  monthlypayment: number;

  constructor(public navCtrl: NavController) {

  }

  compute () {
    this.totalinterestpayable = ((this.balanceamount * 1.5) / 100 ) * this.paymentTerm;
    this.totalamountpayable = this.totalinterestpayable*1 + this.balanceamount*1;
    this.monthlypayment = this.totalamountpayable / this.paymentTerm;
  }

}
