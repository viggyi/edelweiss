import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { FundCard } from '../../components/fund-card/fund-card';
import { Overview } from '../../components/overview/overview';
import { Calculator } from '../../components/calculator/calculator';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Allocation } from '../../components/allocation/allocation';
import { QuantitativeIndicators } from '../../components/quantitative-indicators/quantitative-indicators';
import { SchemeDetails } from '../../components/scheme-details/scheme-details';
import { CurrentNav } from '../../components/current-nav/current-nav';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FundCard,
    Overview,
    Calculator,
    Portfolio,
    Allocation,
    SchemeDetails,
    CurrentNav,
    QuantitativeIndicators,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly platformId = inject(PLATFORM_ID);

  readonly activeNavHref = signal('#overview');

  readonly navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#scheme-details', label: 'Scheme Details' },
    { href: '#risk-rating', label: 'Risk' },
    { href: '#fund-managers', label: 'Fund Managers' },
  ] as const;

  private static readonly ACTIVE_SECTION_OFFSET = 140;

  ngAfterViewInit(): void {
    this.updateActiveSectionFromScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSectionFromScroll();
  }

  private updateActiveSectionFromScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let activeHref: (typeof this.navLinks)[number]['href'] = this.navLinks[0].href;

    for (const link of this.navLinks) {
      const sectionId = link.href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (!section) {
        continue;
      }

      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= Home.ACTIVE_SECTION_OFFSET) {
        activeHref = link.href;
      }
    }

    this.activeNavHref.set(activeHref);
  }
}
