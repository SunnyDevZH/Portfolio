import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section02AboutComponent } from './section02-about/section02-about.component';

export const routes: Routes = [{ path: 'about', component: Section02AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule,],
})
export class AppRoutingModule {}
