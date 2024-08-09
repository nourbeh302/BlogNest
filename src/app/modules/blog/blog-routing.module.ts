import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feed/ui/feed.component').then((c) => c.FeedComponent),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./detail/ui/detail.component').then((c) => c.DetailComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
