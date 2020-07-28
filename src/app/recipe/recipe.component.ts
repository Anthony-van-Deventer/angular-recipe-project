import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  childRecipeChosen(recipe: Recipe){
    console.log(" in recipe component ts ")
    this.recipe = recipe;
  }

}
