import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { FoodCategory } from './food-category';
import { FOOD_CATEGORIES } from './mock-food-categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class FoodCategoryService {

  constructor() { }

  getFoodCategories():Observable<FoodCategory[]>{
    return of(FOOD_CATEGORIES);
  }
}
