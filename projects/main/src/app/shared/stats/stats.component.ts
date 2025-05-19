import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements AfterViewInit {
  @Input() stats: { label: string; value: number; suffix?: string }[] = [];
  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  private hasAnimated = false;
  private isBrowser: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting) && !this.hasAnimated) {
          this.animateCounters();
          this.hasAnimated = true;
        }
      },
      { threshold: 0.3 }
    );

    this.counters.forEach(counter => observer.observe(counter.nativeElement));
  }

  animateCounters() {
    this.counters.forEach((elRef, index) => {
      const target = this.stats[index].value;
      const step = Math.ceil(target / 100);
      let current = 0;

      const update = () => {
        current += step;
        if (current >= target) {
          current = target;
        }

        elRef.nativeElement.textContent = `${current}${this.stats[index].suffix || ''}`;

        if (current < target) {
          requestAnimationFrame(update);
        }
      };

      update();
    });

    this.cdr.detectChanges();
  }
}
