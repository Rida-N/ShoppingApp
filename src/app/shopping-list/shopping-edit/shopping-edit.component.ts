import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') inputName: ElementRef;
  @ViewChild('amountInput') inputAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddBtnClicked() {
    const newIngredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
