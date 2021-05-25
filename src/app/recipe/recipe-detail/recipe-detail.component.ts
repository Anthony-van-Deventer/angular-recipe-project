import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { ShoppinglistService } from 'src/app/shopping-list/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe = null;
  menuStatus: boolean = false;

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit(): void {
  }

  addIngredientsToShoppingList(){
    this.recipe.ingredients.forEach(
      ingredient => this.shoppingListService.addIngredient(ingredient)
    )
  }


}
