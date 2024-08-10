import { Component, Input, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Blog } from '../../../../../core/models/blog';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-feed-item',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.css',
})
export class FeedItemComponent {
  @Input() blog: Blog = {
    id: 0,
    title: '',
    description: '',
    tags: [],
    imgSrc: '',
    postedOn: new Date(),
  };
}
