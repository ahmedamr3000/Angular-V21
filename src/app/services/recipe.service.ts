import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipe } from '../components/recipes/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);
  recipes = signal<recipe[]>([
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
  ]);

  selectedRecipe = signal<recipe | null>(null);


  products = signal<any[]>([]);

  // ---- دالة جديدة بترجع Observable عشان نستخدم معاها toSignal ----
  getProducts$(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

  getData() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Failed to fetch products', err)
    });
  }

  selectRecipe(recipe: recipe) {
    this.selectedRecipe.set(recipe);
  }

  addRecipe(data: recipe) {
    const nextIndex =
      this.recipes().length > 0 ? Math.max(...this.recipes().map((r) => r.index || 0)) + 1 : 1;
    data.index = nextIndex;
    this.recipes.update(prev => [...prev, data]);
  }

  getRecipe(index: number) {
    return this.recipes().find(r => r.index === index);
  }
}
