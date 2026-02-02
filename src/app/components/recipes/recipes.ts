import { Component } from '@angular/core';
import { RecipesDetails } from '../recipes-details/recipes-details';
import { RecipesList } from '../recipes-list/recipes-list';

@Component({
  selector: 'app-recipes',
  imports: [RecipesDetails, RecipesList],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {}
