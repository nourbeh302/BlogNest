import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FeedHeadingComponent } from '../components/feed-heading/feed-heading.component';
import { RouterModule } from '@angular/router';
import { FeedCtaComponent } from '../components/feed-cta/feed-cta.component';
import { Blog } from '../../../../core/models/blog';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [SharedModule, FeedHeadingComponent, FeedCtaComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Angular Performance Optimization Techniques: Best Practices',
      description:
        "In this blog, we explore various strategies to optimize the performance of your Angular applications. From lazy loading modules to ahead-of-time (AOT) compilation, discover techniques that can drastically reduce load times and improve user experience. We also discuss the importance of minimizing change detection cycles and how to leverage Angular’s built-in tools like Angular CLI and Angular Universal for server-side rendering. Whether you're building a large-scale enterprise app or a simple website, these tips will help you ensure your Angular app runs smoothly and efficiently.",
      imgSrc:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Angular', 'Performance', 'Optimization', 'Web Development'],
      postedOn: new Date(),
    },
    {
      id: 2,
      title: 'The Evolution of Modern Football: From Strategy to Spectacle',
      description:
        "Football, often referred to as 'the beautiful game,' has undergone significant changes over the decades, evolving from a simple sport into a global phenomenon. This blog explores the evolution of modern football, focusing on how tactics, technology, and commercialization have transformed the game. From the introduction of the offside rule to the rise of data analytics, we discuss the key moments that have shaped the way football is played and experienced today. The blog also delves into the impact of globalization on football culture, highlighting how the sport has become a unifying force across different cultures and communities. Whether you're a casual fan or a football aficionado, this blog provides an insightful look into the game's rich history and its ongoing evolution.",
      imgSrc:
        'https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Football', 'Sports', 'History', 'Tactics'],
      postedOn: new Date(),
    },
    {
      id: 3,
      title:
        'The Science Behind the Perfect Baseball Swing: Technique and Timing',
      description:
        "Hitting a baseball is often cited as one of the most challenging feats in sports, requiring not just physical strength but also precise timing and technique. This blog delves into the science behind the perfect baseball swing, breaking down the key elements that contribute to a successful hit. We explore the biomechanics of the swing, including the role of the hips, hands, and eyes in generating power and accuracy. The blog also covers the importance of timing and how elite players adjust their swing mechanics to different pitch types and speeds. With insights from professional coaches and players, this blog offers valuable tips for improving your own batting technique, whether you're a seasoned player or just starting out. By understanding the science of hitting, you'll gain a deeper appreciation for the skill and precision required to excel in baseball.",
      imgSrc:
        'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Baseball', 'Sports', 'Technique', 'Training'],
      postedOn: new Date(),
    },
    {
      id: 4,
      title: 'Angular and RxJS: Harnessing the Power of Reactive Programming',
      description:
        "Reactive programming with RxJS is a powerful paradigm that can greatly enhance the capabilities of your Angular applications. This blog provides an in-depth look at how RxJS integrates with Angular, allowing for more efficient data handling and state management. We cover the basics of observables, operators, and subscriptions, and how they can be used to handle asynchronous data streams. Whether you're dealing with user input, HTTP requests, or real-time data, this guide will show you how to make the most of RxJS in your Angular projects.",
      imgSrc:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Angular', 'RxJS', 'Reactive Programming', 'JavaScript'],
      postedOn: new Date(),
    },
    {
      id: 5,
      title: 'Angular Material: Building Modern UI with Ease',
      description:
        "Angular Material is a UI component library that brings Google's Material Design to your Angular applications. In this blog, we explore how to use Angular Material to create modern, responsive, and accessible user interfaces. We cover the installation and configuration of Angular Material, followed by a deep dive into some of the most commonly used components like buttons, forms, and navigation elements. With practical examples, you'll learn how to customize these components to match your application's design language, ensuring a consistent and professional look across all platforms.",
      imgSrc:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Angular', 'Material Design', 'UI/UX', 'Web Development'],
      postedOn: new Date(),
    },
    {
      id: 6,
      title: 'Angular Form Validation: Techniques and Best Practices',
      description:
        "Forms are a crucial part of any web application, and ensuring their validity is essential for a good user experience. This blog dives into the various techniques available in Angular for form validation. We explore template-driven and reactive forms, highlighting their differences and use cases. Additionally, we cover built-in validators, custom validators, and asynchronous validation, providing code examples for each. By the end of this blog, you'll have a clear understanding of how to implement robust form validation in your Angular applications, improving both user experience and data integrity.",
      imgSrc:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Angular', 'Forms', 'Validation', 'Web Development'],
      postedOn: new Date(),
    },
    {
      id: 7,
      title: 'Angular and RxJS: Harnessing the Power of Reactive Programming',
      description:
        "Reactive programming with RxJS is a powerful paradigm that can greatly enhance the capabilities of your Angular applications. This blog provides an in-depth look at how RxJS integrates with Angular, allowing for more efficient data handling and state management. We cover the basics of observables, operators, and subscriptions, and how they can be used to handle asynchronous data streams. Whether you're dealing with user input, HTTP requests, or real-time data, this guide will show you how to make the most of RxJS in your Angular projects.",
      imgSrc:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Angular', 'RxJS', 'Reactive Programming', 'JavaScript'],
      postedOn: new Date(),
    },
  ];

  ctaLink: string = '';
}
