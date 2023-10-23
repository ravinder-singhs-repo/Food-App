import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes :Recipe[] = [
    new Recipe('A Test recipe' , 'This is simply a test ' , 'https://img.taste.com.au/LN37QCSZ/w1200-h630-cfill/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg')
  ];
  constructor(){

  }
}
