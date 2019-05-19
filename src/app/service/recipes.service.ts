import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList: Recipe[] = [
    new Recipe('recipe1', 'recipe1 decription', '../../assets/imgs/recipe1.png'),
    new Recipe('recipe2', 'recipe2 decription', '../../assets/imgs/recipe2.png'),
    new Recipe('recipe3', 'recipe3 decription', '../../assets/imgs/recipe3.png'),
  ];

  selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
}
