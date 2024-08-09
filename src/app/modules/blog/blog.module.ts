import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FeedComponent } from './ui/feed.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogRoutingModule, FeedComponent],
  exports: [FeedComponent],
})
export class BlogModule {}
