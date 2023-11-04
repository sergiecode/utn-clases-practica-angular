import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOption: string = 'home'

  onOption(option: string) {
    this.menuOption = option
  }
}
