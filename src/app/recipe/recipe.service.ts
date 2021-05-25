import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] =[
    new Recipe("noodle",
    "noodles",
    "https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19.jpg",
    [
      new ingredient('noodle',1),
      new ingredient('salt',5),
      new ingredient('water',1010)
    ]),
    new Recipe("burger",
    "burger description"
    ,"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg",
    [
      new ingredient('patty',1),
      new ingredient('bun',1)
    ]),
    new Recipe("pisha",
    "pisha description",
    "https://i1.sndcdn.com/avatars-000418787754-ybhl7m-t500x500.jpg",
    [
      new ingredient('pisha base',1),
      new ingredient('peperoni',15),
      new ingredient('cheese',5)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
