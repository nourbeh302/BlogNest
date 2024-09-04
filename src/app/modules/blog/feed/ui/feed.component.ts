import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FeedHeadingComponent } from '../components/feed-heading/feed-heading.component';
import { FeedCtaComponent } from '../components/feed-cta/feed-cta.component';
import { Blog } from '../../../../core/models/blog';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { FeedItemComponent } from '../components/feed-item/feed-item.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    SharedModule,
    FeedHeadingComponent,
    FeedCtaComponent,
    FeedItemComponent,
    AsyncPipe,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  private blogService: BlogService = inject(BlogService);

  blogs$: Observable<Blog[]>;

  constructor() {
    this.blogs$ = this.blogService.getAll();
  }
}
