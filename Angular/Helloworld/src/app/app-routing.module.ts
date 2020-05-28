import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'employeeList', pathMatch:"full"},
  {path:'employeeList', component:EmplistComponent},
  {path:'employeeDetails', component:EmpdetailsComponent},
  {path:'employeeDetails/:id', component:EmpdetailsComponent},
  {path:'**', component:PageNotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
