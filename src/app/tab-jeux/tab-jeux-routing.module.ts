import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabJeuxComponent } from './tab-jeux/tab-jeux.component';

const routes: Routes = [
  {
    path: "",
    component: TabJeuxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabJeuxRoutingModule { }
