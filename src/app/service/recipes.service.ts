import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../ingredient.model';
import { VirtualTimeScheduler } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList: Recipe[] = [
    new Recipe('recipe1', 'recipe1 decription', '../../assets/imgs/recipe1.png',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Banana', 1),
        new Ingredient('Apple', 5)
      ]),
    new Recipe('recipe2', 'recipe2 decription', '../../assets/imgs/recipe2.png', [
      new Ingredient('Chicken', 2),
      new Ingredient('Meat', 3),
      new Ingredient('Onion', 4)
    ]),
    new Recipe('recipe3', 'recipe3 decription', '../../assets/imgs/recipe3.png', [
      new Ingredient('Potato', 1),
      new Ingredient('Peanut', 4),
      new Ingredient('Cabbage', 2)
    ]),
  ];

  selectedRecipe = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) { }

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
