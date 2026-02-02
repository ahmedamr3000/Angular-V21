import { recipe } from './../recipes/recipe.model';
import { Component } from '@angular/core';
import { Recipes } from '../recipes/recipes';
import { RecipesItem } from '../recipes-item/recipes-item';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesItem],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
  standalone: true,
})
export class RecipesList {
  recipes: recipe[] = [
    new recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
    ),
    new recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
    ),
    new recipe(
      3,
      'Pasta',
      'Italian pasta with tomato sauce',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
    ),
  ];

  add(data: recipe): void {
    console.log('hello');

    this.recipes.push(data);
  }
}
