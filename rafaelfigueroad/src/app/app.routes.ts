import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ViewProfilePageComponent } from './views/view-profile-page/view-profile-page.component'
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'homePage', component: HomePageComponent},
  { path: 'viewProfile', component: ViewProfilePageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
