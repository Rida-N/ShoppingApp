import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor() { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipeList = [
      new Recipe('recipe1', 'recipe1 decription', '../assets/imgs/recipe1.png'),
      new Recipe('recipe2', 'recipe2 decription', '../assets/imgs/recipe2.png'),
      new Recipe('recipe3', 'recipe3 decription', '../assets/imgs/recipe3.png'),
    ];
  }

}
