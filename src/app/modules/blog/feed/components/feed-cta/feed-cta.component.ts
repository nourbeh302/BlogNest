import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-cta',
  standalone: true,
  imports: [],
  templateUrl: './feed-cta.component.html',
  styleUrl: './feed-cta.component.css',
})
export class FeedCtaComponent {
  @Input() link: string = '';
}
