import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: ingredient;

  ingredients: ingredient[];

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
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
