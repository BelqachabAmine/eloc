import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/Component/home/home.component';
import {HowitworkComponent} from '../app/Component/how It Work/howitwork/howitwork.component';
import {LocationComponent} from '../app/Component/location/location.component'

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
  },
  { 
    path: 'noustrouve',
    component: LocationComponent 
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
