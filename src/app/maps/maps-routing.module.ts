import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children: [
      { path:'fullScreen', component: FullScreenPageComponent },
      { path:'markers', component: MarkerPageComponent },
      { path:'properties', component: PropertiesPageComponent },
      { path:'zoom-range', component: ZoomRangePageComponent },
      { path:'**', redirectTo: 'fullScreen' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
