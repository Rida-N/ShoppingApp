import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientList: Ingredient[] = [];
  constructor() { }
}
