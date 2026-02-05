import { recipe } from './../recipes/recipe.model';
import { Component, inject } from '@angular/core';
import { RecipesItem } from '../recipes-item/recipes-item';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesItem],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
  standalone: true,
})
export class RecipesList {
  private recipeService = inject(RecipeService);
  recipes = this.recipeService.recipes;

  add(data: recipe): void {
    this.recipeService.addRecipe(data);
  }
}
