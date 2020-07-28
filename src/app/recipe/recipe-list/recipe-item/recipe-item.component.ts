import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() recipeChosen = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.recipeChosen.emit(this.recipe);
  }

}
