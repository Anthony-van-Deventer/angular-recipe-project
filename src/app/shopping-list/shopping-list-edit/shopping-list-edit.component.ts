import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('nameInput') name: ElementRef;
  @Input() passedIngredient: ingredient;




  constructor(private shoppinglistService: ShoppinglistService) {}

  ngOnInit(): void {
  }

  addIngredient(){
    this.shoppinglistService.addIngredient(new ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    this.clearInputs();
  }

  clearInputs(){
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

  deleteIngredient(){
    this.shoppinglistService.removeIngredient(this.name.nativeElement.value);
    console.log(this.shoppinglistService.getIngredients())
    this.clearInputs();
  }

}
