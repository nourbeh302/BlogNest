import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FeedComponent } from './feed/ui/feed.component';
import { DetailComponent } from './detail/ui/detail.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogRoutingModule, FeedComponent, DetailComponent],
  exports: [FeedComponent],
})
export class BlogModule {}
