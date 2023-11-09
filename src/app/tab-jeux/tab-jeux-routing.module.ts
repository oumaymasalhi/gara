import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabJeuxComponent } from './tab-jeux/tab-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';

const routes: Routes = [
  {
    path: "",
    component: TabJeuxComponent,
    children:[
      {path:"jeux", component: JeuxComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabJeuxRoutingModule { }
