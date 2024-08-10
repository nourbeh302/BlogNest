import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Blog } from '../../../../core/models/blog';
import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  blog: WritableSignal<Blog | undefined> = signal(undefined);
  blogAsObservable$ = toObservable(this.blog);

  private blogService = inject(BlogService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        switchMap((id) => this.blogService.getOne(id))
      )
      .subscribe((blog) => this.blog.set(blog));
  }
}
