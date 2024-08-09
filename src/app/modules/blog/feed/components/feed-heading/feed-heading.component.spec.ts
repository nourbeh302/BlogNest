import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedHeadingComponent } from './feed-heading.component';

describe('FeedHeadingComponent', () => {
  let component: FeedHeadingComponent;
  let fixture: ComponentFixture<FeedHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
