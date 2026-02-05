import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  standalone: true,
  template: `
    <div class="p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg">
      <p class="text-xl italic">Please select a recipe to see details!</p>
    </div>
  `,
})
export class RecipeStart {}
