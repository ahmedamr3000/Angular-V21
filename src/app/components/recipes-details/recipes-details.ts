import { Component, inject, computed } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
// import { ActivatedRoute } from '@angular/router';
// import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recipes-details',
  imports: [],
  templateUrl: './recipes-details.html',
  styleUrl: './recipes-details.css',
})
export class RecipesDetails {
  private recipeService = inject(RecipeService);
  selectedRecipe = computed(() => {
    return this.recipeService.selectedRecipe();
  });
}
