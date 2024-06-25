import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/Component/home/home.component';
import {HowitworkComponent} from '../app/Component/how It Work/howitwork/howitwork.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { 
    path: 'home',
    component: HomeComponent 
  },
  { 
    path: 'howitwork',
    component: HowitworkComponent 
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
