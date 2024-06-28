import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  number1: number = 0;
  number2: number = 0;
  sumNumber: number = 0;

  // Comunicación de componentes

  /*retrieveNumber1(e: any) {
    this.number1 = +e.target.value;
  }

  retrieveNumber2(e: any) {
    this.number2 = +e.target.value;
  }*/

  sum() {
    this.sumNumber = this.number1 + this.number2;
  }

}
