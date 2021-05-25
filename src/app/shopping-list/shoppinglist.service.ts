import { Injectable } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppinglistService {
  private ingredients: ingredient[] = [
    // new ingredient("potato", 5),
    // new ingredient("potato chips", 50)
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(name: string) {
    this.ingredients.splice(
      this.ingredients.findIndex((ingredient) => ingredient.name == name),
      1
    );
  }
}
