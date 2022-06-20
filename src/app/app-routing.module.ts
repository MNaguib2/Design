import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'selectFormat' , component: SelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
