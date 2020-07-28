import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe("noodle","noodles","https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19.jpg"),
    new Recipe("burger","burger description","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg"),
    new Recipe("pisha","pisha description","https://i1.sndcdn.com/avatars-000418787754-ybhl7m-t500x500.jpg")
  ];

  @Output() recipeChosen = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  childClicked(choice: Recipe){
    this.recipeChosen.emit(choice);
  }

}
