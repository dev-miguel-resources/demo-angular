import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  x: string = 'Titulo desde el ts del padre';
  result: number = 0;

  retrieveSum(e: number) {
    this.result = e;
  }
}
