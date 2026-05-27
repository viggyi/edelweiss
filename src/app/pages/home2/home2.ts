
import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { FundCard } from '../../components/fund-card/fund-card';
import { Overview } from '../../components/overview/overview';
import { Calculator } from '../../components/calculator/calculator';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Allocation } from '../../components/allocation/allocation';
import { QuantitativeIndicators } from '../../components/quantitative-indicators/quantitative-indicators';
import { SchemeDetails } from '../../components/scheme-details/scheme-details';
import { CurrentNav } from '../../components/current-nav/current-nav';

@Component({
  selector: 'app-home2',
  imports: [
    NgClass,
    FundCard,
    Overview,
    Calculator,
    Portfolio,
    Allocation,
    SchemeDetails,
    CurrentNav,
    QuantitativeIndicators,
  ],
  templateUrl: './home2.html',
  styleUrl: './home2.css',
})
export class Home2 {
  readonly activeNavHref = signal('/home2#overview');

  readonly navLinks = [
    { href: '/home2#overview', label: 'Overview' },
    { href: '/home2#calculator', label: 'Calculator' },
    { href: '/home2#portfolio', label: 'Portfolio' },
    { href: '/home2#scheme-details', label: 'Scheme Details' },
    { href: '/home2#risk', label: 'Risk' },
    { href: '/home2#fund-managers', label: 'Fund Managers' },
  ] as const;

  private readonly heroRef = viewChild<ElementRef<HTMLElement>>('heroSection');
  private readonly isPastHero = signal(false);
  private static readonly STICKY_OFFSET = 72;

  readonly fundCardPositionClass = computed(() =>
    this.isPastHero() ? 'md:translate-y-0' : 'md:-translate-y-[600px]',
  );

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const el = this.heroRef()?.nativeElement;
    if (!el) {
      return;
    }
    const bottom = el.getBoundingClientRect().bottom;
    this.isPastHero.set(bottom <= Home2.STICKY_OFFSET);
  }
}
