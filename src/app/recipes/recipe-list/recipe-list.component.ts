import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    return this.recipeService.recipeList;
  }

}
