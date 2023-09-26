import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range/range.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"list",component:ListComponent},
  {path:"range",component:RangeComponent},
  {path:"category",component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
