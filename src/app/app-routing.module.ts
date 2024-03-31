import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { AddTravelComponent } from './add-travel/add-travel.component';

const routes: Routes = [
  {path:'',component:TravelComponent},
  {path:'travel/add',component:AddTravelComponent},
  {path:'travel/edit/:id',component:AddTravelComponent},
  {path:'travel/:id',component:TravelDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
