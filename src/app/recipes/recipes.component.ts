import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipeList;
  constructor() { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipeList = [
      { name: 'recipe1', description: 'recipe1 decription', imgPath: '../assets/imgs/recipe1.png' },
      { name: 'recipe2', description: 'recipe2 decription', imgPath: '../assets/imgs/recipe2.png' },
      { name: 'recipe3', description: 'recipe3 decription', imgPath: '../assets/imgs/recipe3.png' }
    ];
  }

}
