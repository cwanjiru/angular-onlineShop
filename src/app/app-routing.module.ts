import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { CategoryComponent } from './category/category/category.component'

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'category/categorySlug', component: CategoryComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
