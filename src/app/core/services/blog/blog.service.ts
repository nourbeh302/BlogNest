import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
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
      title: 'The Art of Sourdough: Mastering the Craft of Homemade Bread',
      description:
        "Sourdough bread has captured the hearts of home bakers around the world, thanks to its unique flavor and texture. This blog offers a step-by-step guide to mastering sourdough, from cultivating your own starter to baking the perfect loaf. Learn the science behind fermentation, tips for achieving the ideal crumb, and how to troubleshoot common issues. Whether you're a beginner or an experienced baker, this guide will elevate your bread-making skills.",
      imgSrc:
        'https://images.unsplash.com/photo-1607309089576-358db307bf89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Sourdough', 'Baking', 'Food', 'Fermentation'],
      postedOn: new Date(),
    },
    {
      id: 5,
      title: 'The Quantum World: Unraveling the Mysteries of Quantum Mechanics',
      description:
        "Quantum mechanics challenges our understanding of the universe at the smallest scales. This blog provides an accessible introduction to key concepts like wave-particle duality, superposition, and entanglement. Explore how these principles are revolutionizing fields like computing and cryptography. Whether you're new to quantum theory or looking to deepen your knowledge, this guide will help you grasp the fundamental ideas that are shaping the future of science.",
      imgSrc:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Quantum Mechanics', 'Physics', 'Science'],
      postedOn: new Date(),
    },
    {
      id: 6,
      title: 'Mastering Light in Photography: Techniques for Stunning Images',
      description:
        "Light is the essence of photography, and understanding how to manipulate it can transform your images. This blog explores techniques for using natural and artificial light to create dramatic effects, enhance composition, and bring out the best in your subjects. Whether you're shooting portraits, landscapes, or still life, these tips will help you harness the power of light to take your photography to the next level.",
      imgSrc:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Photography', 'Lighting Techniques', 'Composition'],
      postedOn: new Date(),
    },
    {
      id: 7,
      title: 'The Human Microbiome: Understanding the Ecosystem Within Us',
      description:
        'The human microbiome, consisting of trillions of microorganisms, plays a crucial role in our health. This blog delves into the fascinating world of the microbiome, exploring how these microbes influence everything from digestion to immunity. Learn about the latest research on the gut-brain axis, the impact of diet on microbial diversity, and how to support a healthy microbiome. This guide offers insights into one of the most exciting areas of modern biology.',
      imgSrc:
        'https://images.unsplash.com/photo-1603808283650-173a39f7ced8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Microbiome', 'Biology', 'Health'],
      postedOn: new Date(),
    },
  ];

  constructor() {}

  list(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getOne(id: number): Observable<Blog | undefined> {
    return of(this.blogs).pipe(
      map((blogs) => blogs.find((blog) => blog.id == id))
    );
  }
}
