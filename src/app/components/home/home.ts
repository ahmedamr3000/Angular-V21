import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Test } from '../../directives/test';
import { ShoppingList } from '../shopping-list/shopping-list';
import { Recipes } from '../recipes/recipes';
import { RecipesList } from '../recipes-list/recipes-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShoppingList, Recipes],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  getData(isHover: boolean): void {
    console.log(isHover);
  }
}
