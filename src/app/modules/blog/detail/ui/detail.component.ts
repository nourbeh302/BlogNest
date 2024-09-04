import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Blog } from '../../../../core/models/blog';
import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  private destroy$ = new Subject<void>();

  blog$: Observable<Blog | null>;

  private blogService = inject(BlogService);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.blog$ = this.activatedRoute.params.pipe(
      map((params) => params['id']),
      switchMap((id) => this.blogService.getOne(id))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
