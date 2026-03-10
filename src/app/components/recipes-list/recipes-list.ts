import { recipe } from './../recipes/recipe.model';
import { Component, inject } from '@angular/core';
import { RecipesItem } from '../recipes-item/recipes-item';
import { RecipeService } from '../../services/recipe.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesItem, AsyncPipe],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
  standalone: true,
})
export class RecipesList {
  private recipeService = inject(RecipeService);
  // --- الكود القديم ---
  recipes = this.recipeService.recipes;
  products = this.recipeService.products;

  // --- الكود الجديد باستخدام toSignal ---
  // ده بياخد الـ Observable ويحوله لـ Signal مباشرة
  productsWithToSignal = toSignal(this.recipeService.getProducts$(), { initialValue: [] });

  add(data: recipe): void {
    this.recipeService.addRecipe(data);
  }

  // get() {
  //   this.recipeService.getData();
  // }
  // ngOnInit() {
  //   this.get()
  // }
}
