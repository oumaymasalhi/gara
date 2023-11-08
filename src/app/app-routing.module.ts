import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'tap-jeux', pathMatch: "full" },

  {
    path: "tap-jeux",
    loadChildren: () => import('./tab-jeux/tab-jeux.module').then(m => m.TabJeuxModule),
  },
  {
    path: "**",
    redirectTo: "tap-jeux"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
