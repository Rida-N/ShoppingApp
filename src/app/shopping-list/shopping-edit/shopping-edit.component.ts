import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../ingredient.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') inputName: ElementRef;
  @ViewChild('amountInput') inputAmount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddBtnClicked() {
    this.shoppingListService.ingredientList.push(new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value));
  }
}
