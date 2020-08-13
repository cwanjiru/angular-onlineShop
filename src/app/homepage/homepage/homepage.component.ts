import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from '../../core/food-category.service';
import { FoodCategory } from 'src/app/core/food-category';
@Component({
  selector: 'ots-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {
 foodCategories : FoodCategory[];
 
  constructor(private foodCategoryService:FoodCategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories():void{
    this.foodCategoryService.getFoodCategories().subscribe(categories=>this.foodCategories=categories);
  }

}
