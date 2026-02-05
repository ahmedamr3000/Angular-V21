import { Component, Input, inject } from '@angular/core';
import { recipe } from '../recipes/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-item',
  imports: [],
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
  standalone: true,
})
export class RecipesItem {
  @Input() item!: recipe;
  private recipeService = inject(RecipeService);

  onSelect() {
    this.recipeService.selectRecipe(this.item);
  }
}
