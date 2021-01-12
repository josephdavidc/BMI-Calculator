import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
height: number;
weight: number;
bmi: number;
bmimessage: string;

  constructor(public navCtrl: NavController) {}

  calculateBMI() {
    this.bmi = this.weight / (this.height*this.height);
    this.bmi = parseFloat(this.bmi.toFixed(2));

    if (this.bmi < 18.5) {
      this.bmimessage = "Underweight";
    } else if (this.bmi > 18.5 && this.bmi < 25) {
      this.bmimessage = "Normal";
    } else if (this.bmi > 25 && this.bmi < 30) {
      this.bmimessage = "Overweight";
    } else {
      this.bmimessage = "Obese"
    }
    }

  

}
