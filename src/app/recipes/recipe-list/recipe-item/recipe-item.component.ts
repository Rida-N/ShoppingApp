import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() item: Recipe;
  // @Output() clickedItem = new EventEmitter<void>();
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

}
