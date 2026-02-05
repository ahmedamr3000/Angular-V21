import { Component } from '@angular/core';
import { RecipesList } from '../recipes-list/recipes-list';
import { RecipesDetails } from '../recipes-details/recipes-details';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesList, RecipesDetails],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {}
