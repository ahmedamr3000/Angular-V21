import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Test } from '../../directives/test';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Test],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  getData(isHover: boolean): void {
    console.log(isHover);
  }
}
