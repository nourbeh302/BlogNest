import { Component } from '@angular/core';
import { Blog } from '../../../../core/models/blog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  blog: Blog = {
    id: 2,
    title: 'The Evolution of Modern Football: From Strategy to Spectacle',
    description:
      "Football, often referred to as 'the beautiful game,' has undergone significant changes over the decades, evolving from a simple sport into a global phenomenon. This blog explores the evolution of modern football, focusing on how tactics, technology, and commercialization have transformed the game. From the introduction of the offside rule to the rise of data analytics, we discuss the key moments that have shaped the way football is played and experienced today. The blog also delves into the impact of globalization on football culture, highlighting how the sport has become a unifying force across different cultures and communities. Whether you're a casual fan or a football aficionado, this blog provides an insightful look into the game's rich history and its ongoing evolution.",
    imgSrc:
      'https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Football', 'Sports', 'History', 'Tactics'],
    postedOn: new Date(),
  };
}
