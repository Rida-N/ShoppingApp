import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredientList;
  }

  addIngredient(name: string, amount: number) {
    this.ingredientList.push(new Ingredient(name, amount));
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredientList.push(...ingredients);
  }
}
