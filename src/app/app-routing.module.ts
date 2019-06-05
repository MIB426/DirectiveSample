import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightPageComponent } from './highlight-page.component';
const routes: Routes = [
  {
    path: 'highlight-page',
    component: HighlightPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
