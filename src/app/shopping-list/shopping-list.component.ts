import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: ingredient;

  ingredients: ingredient[] = [
    new ingredient("potato", 5),new ingredient("potato chips", 50)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: ingredient){
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient: ingredient){
    this.ingredients.splice(this.ingredients.indexOf(ingredient),1);
  }

  passIngredient(ingredientToPass: ingredient){
    this.selectedIngredient = ingredientToPass;
  }



}
