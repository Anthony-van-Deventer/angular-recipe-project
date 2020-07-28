import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project';
  navIndicator: number = 1;

  setNav(emittedNumber: number){
    console.log("in setnav");
    this.navIndicator = emittedNumber;
  }
}
