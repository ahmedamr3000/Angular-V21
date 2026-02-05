import { Component, model, ModelSignal, signal } from '@angular/core';
import { ShoppingEdit } from '../shopping-edit/shopping-edit';
import { ingridiants } from '../../shared/ingridiants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEdit, FormsModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {
  ingrediants = signal<ingridiants[]>([
    new ingridiants('Apple', 5),
    new ingridiants('Banana', 10),
    new ingridiants('Orange', 15),
  ]);

  name = model('');
  amount = model(0);

  addIngrediant() {
    if (this.name()) {
      this.ingrediants.update(prev => [...prev, new ingridiants(this.name(), this.amount())]);
      
      this.name.set('');
      this.amount.set(0);
    }
  }
}

