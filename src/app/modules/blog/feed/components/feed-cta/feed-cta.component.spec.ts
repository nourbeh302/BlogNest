import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCtaComponent } from './feed-cta.component';

describe('FeedCtaComponent', () => {
  let component: FeedCtaComponent;
  let fixture: ComponentFixture<FeedCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
