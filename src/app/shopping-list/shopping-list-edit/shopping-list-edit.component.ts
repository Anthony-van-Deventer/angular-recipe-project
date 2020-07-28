import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('nameInput') name: ElementRef;

  @Output() ingredientToAdd = new EventEmitter<ingredient>();
  @Output() ingredientToDelete = new EventEmitter<ingredient>();

  @Input() passedIngredient: ingredient;




  constructor() {}

  ngOnInit(): void {
  }

  addIngredient(){
    console.log("add ingredient")
    this.ingredientToAdd.emit(new ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  clearInputs(){
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

  deleteIngredient(){
    this.ingredientToDelete.emit (new ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    this.clearInputs();
  }

}
