import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  useHash: false, // Set to false to enable PathLocationStrategy
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
